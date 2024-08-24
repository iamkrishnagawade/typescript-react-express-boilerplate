import Tutorial from "../model/tutorial.model";

interface ITutorialRepository {
    save(tutorial: Tutorial): Promise<Tutorial>;
}

class TutorialRepository implements ITutorialRepository {
    async save(tutorial: Tutorial): Promise<Tutorial> {
        try {
            return await Tutorial.create({
                title: tutorial.title,
                description: tutorial.description,
                published: tutorial.published
            });
        } catch (error) {
            throw new Error("Faild to create Tutorial!");
        }
    }
}

export default new TutorialRepository();
