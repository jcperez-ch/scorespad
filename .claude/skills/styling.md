# Styling Conventions

## When to use

Always apply these rules when adding or modifying styles in any component across this application.

## Rules

1. **Never use inline `style` attributes.** Raw `style={{ }}` props on elements are not allowed.

2. **Use `@emotion/styled` for custom styled elements.** Import `styled` from `@emotion/styled` and create styled components:
   ```tsx
   import styled from '@emotion/styled';

   const StyledContainer = styled.div`
     display: flex;
     align-items: center;
     column-gap: 8px;
   `;
   ```

3. **Prefix all styled components with `Styled`.** For example: `StyledGameTitle`, `StyledIconRow`, `StyledMenuIcon`. Never name a styled component without the `Styled` prefix.

4. **Use MUI's `sx` prop for MUI components.** When styling MUI components (`Button`, `Chip`, `FormControl`, etc.), prefer the `sx` prop:
   ```tsx
   <Chip sx={{ backgroundColor: '#2e7d32', color: '#fff' }} />
   <FormControl fullWidth sx={{ mt: 2 }}>
   ```

5. **Prefer `@emotion/styled` for non-MUI elements** (`div`, `span`, `ul`, `li`, etc.) and **`sx` for MUI components**.

6. **Place styled components at the top of the file**, before the component function, after imports.
