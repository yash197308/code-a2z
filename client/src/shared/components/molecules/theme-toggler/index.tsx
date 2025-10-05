import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ComputerIcon from '@mui/icons-material/Computer';
import { useTheme } from '../../../hooks/use-theme';
import { Theme } from '../../../states/theme';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    setTheme(event.target.value as Theme);
  };

  return (
    <FormControl size="small" variant="standard">
      <Select
        value={theme}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        disableUnderline
        IconComponent={() => null}
        sx={{
          boxShadow: 'none',
          '.MuiOutlinedInput-notchedOutline': { border: 0 },
          background: 'none',
          border: 'none',
          '& .MuiSelect-select': { paddingRight: '0 !important' },
        }}
      >
        <MenuItem value={Theme.LIGHT}>
          <LightModeIcon fontSize="small" style={{ marginRight: 8 }} />
          Light
        </MenuItem>
        <MenuItem value={Theme.DARK}>
          <DarkModeIcon fontSize="small" style={{ marginRight: 8 }} />
          Dark
        </MenuItem>
        <MenuItem value={Theme.SYSTEM}>
          <ComputerIcon fontSize="small" style={{ marginRight: 8 }} />
          System
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default ThemeToggle;
