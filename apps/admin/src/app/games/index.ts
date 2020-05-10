import GameIcon from '@material-ui/icons/Games';
import GameList from './GameList';
import GameEdit from './GameEdit';
import GameCreate from './GameCreate';
import { ListGuesser } from 'react-admin';

export default {
    list: GameList,
    create: GameCreate,
    edit: GameEdit,
    icon: GameIcon,
    options: { label: 'Spiele' }
};