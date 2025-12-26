/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         brand:
 *           type: string
 *         image:
 *           type: string
 *         price:
 *           type: number
 *     CreateProductInput:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - price
 *       properties:
 *         name:
 *           type: string
 *           minLength: 3
 *           maxLength: 255
 *           example: "Wireless Mouse"
 *         description:
 *           type: string
 *           example: "A very smooth Bluetooth mouse"
 *         image:
 *           type: string
 *           maxLength: 255
 *           example: "https://example.com/image.jpg"
 *         price:
 *           type: number
 *           minimum: 0
 *           example: 49.99
 *         quantity:
 *           type: number
 *           minimum: 0
 *           example: 10
 *         brand:
 *           type: string
 *           maxLength: 255
 *           example: "Logitech"
 *     UpdateProductInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           minLength: 3
 *           maxLength: 255
 *         description:
 *           type: string
 *         image:
 *           type: string
 *           maxLength: 255
 *         price:
 *           type: number
 *           minimum: 0
 *         quantity:
 *           type: number
 *           minimum: 0
 *         brand:
 *           type: string
 *           maxLength: 255
 */
