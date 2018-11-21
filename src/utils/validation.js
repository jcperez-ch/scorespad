import { useEffect, useState } from 'react';
import {
  every,
  find,
  get,
  identity,
  isEmpty,
  isString,
  map,
  mapValues,
} from 'lodash';

const required = ({ value }) => !isEmpty(value);
const gt = context => ({ value }) => value > context;
const allOf = context => ({ value, model }) => context.every(validator => validator({ value, model }));
const someOf = context => ({ value, model }) => context.some(validator => validator({ value, model }));

export const validators = {
  allOf,
  gt,
  required,
  someOf,
};

export const useValidation = (model, schema, messages, inputs = []) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    setErrors(
      mapValues(schema, (rules, key) => {
        const modelErrors = mapValues(rules, (rule, ruleName) => (rule({ model, value: model[key] })
          ? null
          : get(messages, `${key}.${ruleName}`, null)));
        return find(modelErrors, isString) || null;
      }),
    );
  }, map(model, identity).concat(inputs));
  return {
    errors,
    touch: () => setTouched(true),
    reset: () => setTouched(false),
    touched,
    valid: every(errors, isEmpty),
  };
};

export default useValidation;
