import Projects from './Projects'
import Home from './Home'
import { fetchProjects } from './api';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        fetchInitialData: (path='') => fetchProjects(path.split('/').pop())
    },
    {
        path: '/projects',
        exact: true,
        component: Projects,
        fetchInitialData: (path='') => fetchProjects(path.split('/').pop())
    }
]

export default routes