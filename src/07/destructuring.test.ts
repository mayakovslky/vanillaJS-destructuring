//!!! destructuring objects

type LessonType = {
    title: string
}
export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {street: {title: string}}
}

let man: ManType;

beforeEach(() => {
    man = {
        name: 'Vovich',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'possible'
            }
        }
}})

test ('destructuring objects', () => {

    // const age = man.age
    // const lessons = man.lessons

    const {age, lessons} = man
    const {title} = man.address.street

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)
    expect(title).toBe('possible')
})

//!!!!!!!!!!!!!!!!!!! destructuring arrays

test ('destructuring arrays', () => {
    const l1 = man.lessons[0];
    const l2 = man.lessons[1];

    const [ls1, ls2] = man.lessons;

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
})