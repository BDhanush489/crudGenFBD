import express from 'express';

var router = express.Router();

import {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc, PostUploadFromModalFunc,
    PostUploadImageFunc, PostFilterFunc, PostCustomPkFunc,
    PostWithKeysCheckFunc,GetUsingLoadAshFunc,FilterDataFrombodyFunc
} from '../../controllers/postFuncs/EntryFile.js';

import { PostFunc as PostFuncmiddleware } from '../../middlewares/postFuncs/EntryFile.js';
import { PostFunc as PostFuncPostUploadFunc } from '../../middlewares/postFuncs/PostUploadFunc.js';

import { upload as uploadFromMulter } from '../../dals/postFuncs/UsingMulter.js';

router.post('/BodyCheck', PostFuncmiddleware, PostFunc);
router.post('/GetSelectColumns', PostGetSelectColumnsFunc);
router.post('/', PostFunc);
router.post('/CustomPk', PostCustomPkFunc);
router.post('/WithKeysCheck', PostWithKeysCheckFunc);
router.post('/GetUsingLoadAsh/:Id', GetUsingLoadAshFunc);
router.post('/FilterDataFrombody', FilterDataFrombodyFunc);

router.post('/Filter', PostFilterFunc);
router.post('/FromModal', PostFromModalFunc);
router.post('/Upload', PostFuncPostUploadFunc, PostUploadFunc);
router.post('/UploadFromModal', PostUploadFromModalFunc);
router.post('/UploadImage/:Id', uploadFromMulter.single("image"), PostUploadImageFunc);
router.post('/UploadMultipleImages/:Id', uploadFromMulter.array("images", 4), PostUploadImageFunc);

export { router };