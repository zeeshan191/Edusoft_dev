import React from 'react';

import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Student',
    path: '/',
   
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Admission form',
        path: '/Student/AdmissionForm',
     
      },
      {
        title: 'Admission Report',
        path: '/Student/AdmissionReport',

      },
      {
        title: 'Promotion form',
        path: '/Student/PromotionForm',

      },
      {
        title: 'Promtion Report',
        path: '/Student/PromotionReport',

      }
    ]
  },
  {
    title: 'Teachers',
    path: '/',
  
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Admission Form',
        path: '/Teachers/TAdmissionForm',
       
        cName: 'sub-nav'
      },
      {
        title: 'Admission Report',
        path: '/Teachers/TAdmissionReport',
      
        cName: 'sub-nav'
      },
      {
        title: 'Responsiblity Form',
        path: '/Teachers/ResponsiblityForm',
    
      },
      {
        title: 'Responsiblity Report',
        path: '/Teachers/ResponsiblityReport',
     
      }
    ]
  },

  {
    title: 'Notice',
    path: '/',
   
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Notice',
        path: '/Notice/Notice',
     
      },
      {
        title: 'Message',
        path: '/Notice/Message',

      },
     
    ]
  },
  
 {
    title: 'Result',
    path: '/',
   
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Result Form',
        path: '/Result/ResultForm',
    
      },
      {
        title: 'Result Report',
        path: '/Result/ResultReport',
     
      }
    ]
  },
  
  {
    title: 'Exit',
    path: '/',
   
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Student',
        path: '/Exit/Student',
    
      },
      {
        title: 'Student Exit Rep',
        path: '/Exit/StdERep',
    
      },
      {
        title: 'Teacher',
        path: '/Exit/Teacher',
     
      },
      {
        title: 'Teachers Exit Rep',
        path: '/Exit/TeachERep',
    
      }
    ]
  }
];

