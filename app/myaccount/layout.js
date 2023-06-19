import Nav from '../components/Nav';
import MyaccountFooter from '../components/MyaccountFooter';
import '../css/style.css';

export default function DashboardLayout({ children }) {
    return <body className=''><Nav />{children}<MyaccountFooter /></body>;
}