function greetDevelopers(list) {
    for (const elem in list) {
        list[
            elem
        ].greeting = `Hi ${list[elem].firstName}, what do you like the most about ${list[elem].language}?`;
    }
    return list;
}
