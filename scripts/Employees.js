import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

    if(itemClicked.dataset.type === "employee") {

        const employeeId =itemClicked.dataset.employeeid

        let orderCounter = 0 

        const ordersDone = getOrders()
        for(const order of ordersDone) {
            if (parseInt(employeeId) === order.employeeId) {
                orderCounter++
            }
        }
            window.alert(`${itemClicked.dataset.name} sold ${orderCounter} products`)
        }
    }
)





export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-name="${employee.name}" data-employeeid="${employee.id}" data-type="employee">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

