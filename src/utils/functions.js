export const convertGraph = data => {
    let itemsData = {
        labels: [],
        datasets: [
            {
                label: "ارقام به درصد ثبت شده اند",
                data: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1,
            },
        ],
    }
    data.forEach(element => {
        itemsData.labels.push(element.label)
        itemsData.datasets[0].data.push(element.percent)
        itemsData.datasets[0].backgroundColor.push(element.color)
        itemsData.datasets[0].borderColor.push(element.color)
    });
    return itemsData;
}

export const convertGraphSingle = (data, index) => {
    const obj = data[index].childs;

    let itemsData = {
        labels: [],
        datasets: [
            {
                label: "ارقام به درصد ثبت شده اند",
                data: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1,
            },
        ],
    }
    obj.forEach(element => {
        itemsData.labels.push(element.label)
        itemsData.datasets[0].data.push(element.percent)
        itemsData.datasets[0].backgroundColor.push(element.color)
        itemsData.datasets[0].borderColor.push(element.color)
    });
    return itemsData;
}