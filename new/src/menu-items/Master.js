const master = {

  id: 'master',

  title: 'Master',

  type: 'group',

  children: [

    {

      id: 'customer-option',

      title: 'Customer Registration',

      type: 'collapse',

      breadcrumbs: true,

      children:[

        {

          id:'add_customer',

          title:'Add Customer',

          type: 'item',

          url: '/utils/util-color',

          breadcrumbs: true

        },

        {

          id: 'list_customer',

          title: 'List customer',

          type: 'item',

          external: true,

          target: '_blank',

          breadcrumbs: true

        }

      ]

    },

    {

      id: 'loan-option',

      title: 'Loan Process',

      type: 'collapse',

      breadcrumbs: true,

        children:[

              {

                id:'loan_approval',

                title:'Loan Approval',

                type: 'item',

                url: '/utils/util-color',

                breadcrumbs: true

              },

              {

                id: 'loan_repayment',

                title: 'Repayment',

                type: 'item',

                external: true,

                target: '_blank',

                breadcrumbs: true

              },

      ]

    },

    {

      id: 'repledge-option',

      title: 'Repledge',

      type: 'collapse',

      breadcrumbs: true,

        children:[

              {

                id:'repledge_owner',

                title:'Owner',

                type: 'item',

                url: '/utils/util-color',

                breadcrumbs: true

              },

              {

                id: 'epledge_customer',

                title: 'Customer',

                type: 'item',

                external: true,

                target: '_blank',

                breadcrumbs: true

              },

      ]

    },

    {

      id: 'gold-update',

      title: 'gold Rate Update',

      type: 'item',

      external: true,

      target: '_blank',

      breadcrumbs: true

    },

    {

      id: 'payroll-option',

      title: 'Payroll',

      type: 'collapse',

      breadcrumbs: true,

        children:[

              {

                id:'payroll-attendance',

                title:'Owner',

                type: 'item',

                url: '/utils/util-color',

                breadcrumbs: true

              },

              {

                id: 'epledge_customer',

                title: 'Customer',

                type: 'item',

                external: true,

                target: '_blank',

                breadcrumbs: true

              },

      ]

    },

    {

      id: 'account',

      title: 'Account',

      type: 'item',

      external: true,

      target: '_blank',

      breadcrumbs: true

    },

    {

      id: 'master',

      title: 'Master',

      type: 'item',

      external: true,

      target: '_blank',

      breadcrumbs: true

    },

    {

      id: 'employee-option',

      title: 'Employee Registration',

      type: 'collapse',

      breadcrumbs: true,

        children:[

              {

                id:'employee_registration',

                title:'Employee Registration',

                type: 'item',

                url: '/utils/util-color',

                breadcrumbs: true

              },

              {

                id: 'employee_detail',

                title: 'Employee Detail',

                type: 'item',

                external: true,

                target: '_blank',

                breadcrumbs: true

              },

      ]

    },

    {

      id: 'auctions',

      title: 'Auctions',

      type: 'item',

      external: true,

      target: '_blank',

      breadcrumbs: true

    },

    {

      id: 'report',

      title: 'Report',

      type: 'item',

      external: true,

      target: '_blank',

      breadcrumbs: true

    },

    {

      id: 'complaint-feedback',

      title: 'Complaint & Feedback',

      type: 'item',

      external: true,

      target: '_blank',

      breadcrumbs: true

    },

  ]

};




export default master;