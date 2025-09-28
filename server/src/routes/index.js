import express from 'express';

// Import rate limiting middlewares
import authLimiter from '../middlewares/auth-limiter.js';
import generalLimiter from '../middlewares/general-limiter.js';

// Import route modules
import authRoutes from './api/auth.routes.js';
import userRoutes from './api/user.routes.js';
import mediaRoutes from './api/media.routes.js';
import projectRoutes from './api/project.routes.js';
import notificationRoutes from './api/notification.routes.js';
import subscriberRoutes from './api/subscriber.routes.js';
import collectionRoutes from './api/collections.routes.js';
import collaboratorRoutes from './api/collaborator.routes.js';

const router = express.Router();

router.use('/auth', authLimiter, authRoutes);
router.use('/user', generalLimiter, userRoutes);
router.use('/media', generalLimiter, mediaRoutes);
router.use('/project', generalLimiter, projectRoutes);
router.use('/notification', generalLimiter, notificationRoutes);
router.use('/subscriber', generalLimiter, subscriberRoutes);
router.use('/collection', generalLimiter, collectionRoutes);
router.use('/collaborator', generalLimiter, collaboratorRoutes);

export default router;
