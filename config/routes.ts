
export const routes = [
        {
          path: '/',
          redirect: '/home',
        },
        {
            key:'home',
            name: '首页',
            path: '/home',
            component: './home',
          },
          {
            key:'duyi',
            name: 'DU一',
            path: '/duyi',
            component: './duyi',
          },
          {
            key:'formily',
            name: 'formily实践',
            path: '/formily',
            component: './formily',
          },
          {
            key:'cytoscape',
            name: 'cytoscape',
            path: '/cytoscape',
            component: './cytoscapeJs',
          },
      ]