import { RequestHandler } from 'express';
import { userService } from '@app/services';
import { createUserForm, updateUserForm } from './user.validator';
import { passwordUtil } from '@app/utils';

const getById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getById(id);

  user ? res.send(user) : res.status(404).send();
};

const create: RequestHandler = async (req, res) => {
  const { errors, form } = await createUserForm.validate({ ...req.body });

  if (errors) {
    res.status(400).send({ errors });
    return;
  }

  const salt = await passwordUtil.generateSalt();
  const hash = await passwordUtil.generateHash(form.hash, salt);

  form.hash = hash;
  form.salt = salt;

  const user = await userService.create(form);

  res.send(user);
};

const update: RequestHandler = async (req, res) => {
  const { errors, form } = await updateUserForm.validate({ ...req.params, ...req.body });

  if (errors) {
    res.status(400).send({ errors });
    return;
  }

  const user = await userService.update(form.id, form);

  res.send(user);
};

export const userController = {
  getById,
  create,
  update,
};
