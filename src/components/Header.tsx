import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from './Drawer';

export default function Header() {
  return (
    <div className="h-10 w-full bg-blue-300 flex items-center">
      <TemporaryDrawer />
    </div>
  );
}