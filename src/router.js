import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         component: ()=> import('./Views/Home.vue')
      },
      {
         path: '/todos',
         component: () => import('./Views/Todos.vue'),
         meta: {
            requiresAuth: true
         }
      }
      // {
      //    path: '/register',
      //    component
      // }
   ]
})

const getCurrentUser = () => {
   return new Promise((resolve, reject) => {
      const removeListener = onAuthStateChanged(
         getAuth(),
         (user) => {
            removeListener(),
            resolve(user)
         },
         reject
      )
   })
}

router.beforeEach(async (to, from, next) => {
   if(to.matched.some((record) => record.meta.requiresAuth)) {
      if(await getCurrentUser()) {
         next()
      } else {
         alert('Your dont have access');
         next('/');
      }
   } else {
      next();
   }
})

export default router;