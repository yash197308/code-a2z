import { model } from 'mongoose';
import collaboratorSchema from '../schemas/collaborator.schema.js';
import { COLLECTION_NAMES } from '../constants/db.js';

const Collaborator = model(COLLECTION_NAMES.COLLABORATORS, collaboratorSchema);

export default Collaborator;
