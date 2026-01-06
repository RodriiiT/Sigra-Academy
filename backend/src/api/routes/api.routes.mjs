import { Router } from 'express';
import { GradesLogRoutes } from '../../modules/grades-record-V/grades/grades.route.mjs';
import { SETTINGS } from '../../../config/settings.config.mjs';
import { RecordsRoutes } from '../../modules/grades-record-V/records/records.route.mjs'; 
import {Router} from 'express';
import { subjectRoute } from '../../modules/academic-structure-II/subjects/subjects.route.mjs';
import managerRoutes from '../../modules/academic-manager-III/manager.route.mjs'

const router = Router();

router.use('/academic-manager', managerRoutes)

// Definir todas las rutas de los modulos aquí
export const ListRoutes = {
    grades: {
        grades: router.use(`${SETTINGS.BASE_PATH}/grades-log`, GradesLogRoutes),
        records: router.use(`${SETTINGS.BASE_PATH}/records`, RecordsRoutes)
    },
    subject: router.use("/subjects",subjectRoute),
    
    academicManager: '/academic-manager',
}

export default router