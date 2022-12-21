import {createGreetingMessages, ManType} from "./05";

let people: Array<ManType> = [];

beforeEach( () => {
     people = [
        { name: 'Andrew Ivanov', age: 33 },
        { name: 'Alexander Petrov', age: 24 },
        { name: 'Dmitry Sidorov', age: 18 },
    ];
})

test ('should get array of greeting messages', () => {

    const messages = createGreetingMessages(people)

    expect(messages.length).toBe(3);

    expect(messages[0]).toBe('hello Andrew, Welcome to IT-Incubator');
    expect(messages[1]).toBe('hello Alexander, Welcome to IT-Incubator');
    expect(messages[2]).toBe('hello Dmitry, Welcome to IT-Incubator');

})