import styled from '../../../utils/styled-components';

const StyledButton = styled<{ disabled: boolean }, 'button'>('button')`
  color: ${({ disabled, theme }) => disabled ?
        theme.colors.disabledColor :
        theme.colors.primaryColor
    };
`;

export default StyledButton;
