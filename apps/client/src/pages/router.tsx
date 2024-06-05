import { Navigate, createBrowserRouter } from 'react-router-dom'
import Layout from 'shared/ui/Layout'
import {
  BarracksCalculatorPage,
  BlacksmithPage,
  CastleCalculatorPage,
  DragonCalculatorPage,
  ExtremePowerPage,
  MightiestKingdomPage,
  WitchCalculatorPage,
} from './calculator'
import GalleryPage from './calculator/ui/GalleryPage'
import Inventory from './inventory'
import { ParametersPage } from './parameters'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/inventory" />,
      },
      {
        path: '/inventory',
        element: <Inventory />,
      },
      {
        path: '/parameters',
        element: <ParametersPage />,
      },
      {
        path: '/calculator',
        children: [
          {
            index: true,
            element: <Navigate to="/calculator/castle" />,
          },
          {
            path: '/calculator/castle',
            element: <CastleCalculatorPage />,
          },
          {
            path: '/calculator/dragon',
            element: <DragonCalculatorPage />,
          },
          {
            path: '/calculator/witch',
            element: <WitchCalculatorPage />,
          },
          {
            path: '/calculator/barracks',
            element: <BarracksCalculatorPage />,
          },
          {
            path: '/calculator/blacksmith',
            element: <BlacksmithPage />,
          },
          {
            path: '/calculator/gallery',
            element: <GalleryPage />,
          },
          {
            path: '/calculator/extremePower',
            element: <ExtremePowerPage />,
          },
          {
            path: '/calculator/mightiestKingdom',
            element: <MightiestKingdomPage />,
          },
        ],
      },
    ],
  },
])

export default router
