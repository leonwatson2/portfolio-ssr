import Projects from './Projects'
import Home from './Home'
import { fetchProjects } from './api';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/projects',
        exact: true,
        component: Projects,
        fetchInitialData: (path='') => fetchProjects(path.split('/').pop())
    }
]

export default routes