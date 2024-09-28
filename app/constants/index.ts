import createCampaign from '../assets/create-campaign.svg';
import dashboard from '../assets/dashboard.svg';
import logo from '../assets/logo.svg';
import logout from '../assets/logout.svg';
import payment from '../assets/payment.svg';
import profile from '../assets/profile.svg';
import sun from '../assets/sun.svg';
import withdraw from '../assets/withdraw.svg';
import tagType from '../assets/type.svg';
import search from '../assets/search.svg';
import menu from '../assets/menu.svg';
import money from '../assets/money.svg';
import loader from '../assets/loader.svg';
import thirdweb from '../assets/thirdweb.png';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'payment',
    imgUrl: payment,
    link: '/',
    disabled: true,
  },
  {
    name: 'withdraw',
    imgUrl: withdraw,
    link: '/',
    disabled: true,
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },
];
