import { useContext } from 'react';
import { HomePageContext } from '@/context/HomePageContext';

export const useHomePage = () => useContext(HomePageContext);
