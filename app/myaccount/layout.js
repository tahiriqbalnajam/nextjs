import Nav from '../components/Nav';
import MyaccountFooter from '../components/MyaccountFooter';
import '../css/style.css';

export default function DashboardLayout({ children }) {
    return <body className='font-Ubuntufont'><Nav />{children}<MyaccountFooter /></body>;
}