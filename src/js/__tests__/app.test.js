import getHealthStatus from "../app";

test("getHealthStatus = healthy", () => {
    const result = getHealthStatus({ name: "Lala", health: 100 });
    expect(result).toBe("healthy");
});

test("getHealthStatus = wounded", () => {
    const result = getHealthStatus({ name: "Bebe", health: 23 });
    expect(result).toBe("wounded");
});

test("getHealthStatus = critical", () => {
    const result = getHealthStatus({ name: "Boo", health: 7 });
    expect(result).toBe("critical");
});

test("getHealthStatus", () => {
    const result = getHealthStatus({ name: "Mimi" });
    expect(result).toBe(0);
});


// test("getHealthStatus", () => {
//     const result = getHealthStatus({ name: "Lala", health: 100 });
//     expect(fail).toBe("healthy");
// });