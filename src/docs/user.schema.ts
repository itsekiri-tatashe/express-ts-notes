/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterUserInput:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           minLength: 3
 *           maxLength: 255
 *           example: johndoe@example.com
 *         password:
 *           type: string
 *           minLength: 7
 *           maxLength: 255
 *           example: strongpassword123
 *         name:
 *           type: string
 *           minLength: 3
 *           maxLength: 255
 *           example: John Doe
 *         address:
 *           type: string
 *           minLength: 3
 *           maxLength: 255
 *           example: 123 Main Street, Lagos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginUserInput:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: johndoe@example.com
 *         password:
 *           type: string
 *           minLength: 7
 *           example: strongpassword123
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginUserInput:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: johndoe@example.com
 *         password:
 *           type: string
 *           minLength: 7
 *           example: strongpassword123
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         email:
 *           type: string
 *           format: email
 *         role:
 *           type: string
 *           example: user
 *         name:
 *           type: string
 *         address:
 *           type: string
 */
