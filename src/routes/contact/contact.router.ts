import { Router } from "express"
import { createContactController } from "../../controllers/contact/createContact.controller"
import { ensureClientExist } from "../../middlewares/ensureClientExist.middlewares"
import { validateToken } from "../../middlewares/validateToken.middleware"
import { ensureClientIsOwner } from "../../middlewares/ensureClientIsOwner.middleware"
import { validateData } from "../../middlewares/validateData.middleware"
import { createContactSchema } from "../../schemas/contact/createContact.schema"
import { ensureContactExist } from "../../middlewares/ensureContactExist.middlewares"
import { readContactController } from "../../controllers/contact/readContact.controller"
import { ensureClientIsOwnerOfContact } from "../../middlewares/ensureClientIsOwnerOfContact.middleware"
import { readContactsController } from "../../controllers/contact/readContacts.controller"
import { updateContactController } from "../../controllers/contact/updateContact.controller"
import { updateContactSchema } from "../../schemas/contact/updateContact.schemas"
import { deleteContactController } from "../../controllers/contact/deleteCreate.controller"

export const contactRouter: Router = Router()

contactRouter.post('/:id', validateToken, ensureClientExist, ensureClientIsOwner, validateData(createContactSchema),createContactController)
contactRouter.get('/:id', validateToken, ensureContactExist, ensureClientIsOwnerOfContact, readContactController),
contactRouter.get('/all/:id', validateToken, ensureClientExist, ensureClientIsOwner, readContactsController)
contactRouter.patch('/:id', validateToken, ensureContactExist, ensureClientIsOwnerOfContact, validateData(updateContactSchema), updateContactController)
contactRouter.delete('/:id', validateToken, ensureContactExist, ensureClientIsOwnerOfContact, deleteContactController)