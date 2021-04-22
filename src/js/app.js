export default function getHealthStatus({ name, health }) {
    let healthStatus = "healthy";
    if (health <= 50 && health >= 15) {
        healthStatus = "wounded";
    } else if (health < 15) {
        healthStatus = "critical";
    } else if (health === undefined || health === null) {
        return 0;
    }
    return healthStatus;
}

const userHealthStatus = getHealthStatus({ name: "Маг", health: 90 });