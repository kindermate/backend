import { AnswerCreateDto } from './dto/answer.create.dto';
import { TestsService } from './tests.service';
export declare class TestsController {
    private readonly testsService;
    constructor(testsService: TestsService);
    getQuestion(code: string): Promise<import("./schema/question.schema").Question[]>;
    getTest(code: string): Promise<import("./schema/test.schema").Test>;
    createAnswer(body: AnswerCreateDto): Promise<import("./schema/answer.schema").Answer>;
}
