import TagIcon from '@material-ui/icons/Category';
import TagList from './TagList';
import TagEdit from './TagEdit';
import TagCreate from './TagCreate';
import { ListGuesser } from 'react-admin';

export default {
    list: TagList,
    create: TagCreate,
    edit: TagEdit,
    icon: TagIcon
};