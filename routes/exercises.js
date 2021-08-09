import { Router } from "express";

import { Challenge } from "../controllers/main_controller.js";

const router = Router();

const theResults = new Challenge();

// Route's schema

/**
 * @swagger
 * components:
 *   schemas:
 *     Average:
 *       type: object
 *       required:
 *         - number1
 *         - number2
 *       properties:
 *         number1:
 *           type: integer
 *           description: Primer número
 *         number2:
 *           type: integer
 *           description: Segundo número
 *       example:
 *         number1: 5
 *         number2: 5
 *
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     String_manipulation:
 *       type: object
 *       required:
 *         - characters
 *       properties:
 *         characters:
 *           type: string
 *           description: Introduce Carácteres
 *       example:
 *         characters: Hi! Hi!! Hi!
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Sum_array:
 *       type: array
 *       items:
 *         type: integer
 *         description: Introduce números positivos/negativos en el array
 *       example:
 *         array: [2, 5, 3, 2, 3, 10, 15]
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Transform_array:
 *       type: object
 *       required:
 *         - order
 *         - multiArray
 *       properties:
 *         multiArray:
 *           type: array
 *           items:
 *             type: integer
 *             description: Introduce elementos alfanúmericos, strings/números
 *         order:
 *           type: string
 *           description: Introduce el orden en que quieres los números, ASC/DESC
 *       example:
 *         multiArray: [[3, 4, lol], [4, lmao, 9], [1, este trabajo, es mio]]
 *         order: ASC
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     My_cows:
 *       type: object
 *       required:
 *         - order
 *         - multiArray
 *       properties:
 *         data:
 *           type: array
 *           items:
 *             type: integer
 *             description: Introduce los días, y la cantidad de litros producidos por cada vaca en cada día, por ejemplo [[2, 4, 5]], el array               dentro del array es el día 1, y dentro de ese array, introduce los litros producidos, en este caso, la vaca 1 hizo 2                           litros, la vaca 2 hizo 4 litros, la vaca 3 hizo 5 litros
 *         numberOfCows:
 *           type: integer
 *           description: Introduce la cantidad de vacas
 *       example:
 *         data: [[2, 3, 4], [5, 5, 10], [2, 12, 4], [10, 4, 5], [2, 3, 3], [3, 5, 4], [1, 2, 2]]
 *         numberOfCows: 3
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Tracking_coordinadora:
 *       type: object
 *       required:
 *         - order
 *         - multiArray
 *       properties:
 *         data:
 *           type: array
 *           items:
 *             type: integer
 *             description: Introduce los días, y la cantidad de litros producidos por cada vaca en cada día, por ejemplo [[2, 4, 5]], el array               dentro del array es el día 1, y dentro de ese array, introduce los litros producidos, en este caso, la vaca 1 hizo 2                           litros, la vaca 2 hizo 4 litros, la vaca 3 hizo 5 litros
 *         numberOfCows:
 *           type: integer
 *           description: Introduce la cantidad de vacas
 *       example:
 *         data: [[2, 3, 4], [5, 5, 10], [2, 12, 4], [10, 4, 5], [2, 3, 3], [3, 5, 4], [1, 2, 2]]
 *         numberOfCows: 3
 */

// Average

/**
 * @swagger
 * /challenge/average:
 *   post:
 *     summary: Promedio de dos números
 *     tags: [Reto-1]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Average'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Average'
 */

router.post("/average", theResults.average1);

// String manipulation

/**
 * @swagger
 * /challenge/string_manipulation:
 *   post:
 *     summary: Manipulación de string
 *     tags: [Reto-2]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/String_manipulation'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/String_manipulation'
 */

router.post("/string_manipulation", theResults.stringManipulation2);

// Sum Array

// String manipulation

/**
 * @swagger
 * /challenge/sum_array:
 *   post:
 *     summary: Sum Array
 *     tags: [Reto-3]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sum_array'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sum_array'
 */

router.post("/sum_array", theResults.sumArray3);

// Transform Array

/**
 * @swagger
 * /challenge/transform_array:
 *   post:
 *     summary: Transform Array
 *     tags: [Reto-4]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Transform_array'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transform_array'
 */

router.post("/transform_array", theResults.transformArray4);

// My Cows

/**
 * @swagger
 * /challenge/my_cows:
 *   post:
 *     summary: My cows
 *     tags: [Reto-5]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/My_cows'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/My_cows'
 */

router.post("/my_cows", theResults.myCows5);

// Tracking Coordinadora

/**
 * @swagger
 * /challenge/tracking_coordinadora/{codigo}:
 *   post:
 *     summary: Tracking Coordinadora
 *     tags: [Reto-6]
 *     parameters:
 *       - in: path
 *         name: codigo
 *         required: true
 *         schema:
 *           type: integer
 *         description: Introduce el codigo
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json
 */

router.post("/tracking_coordinadora/:codigo", theResults.trackingCoordinadora6);

// Array Score

/**
 * @swagger
 * /challenge/array_score:
 *   post:
 *     summary: Array Score
 *     tags: [Reto-7]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sum_array'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sum_array'
 */

router.post("/array_score", theResults.arrayScore7);

export default router;
