const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = (s * a) % m) / m;
    };
};

export const fetchAPI = function(date) {
    const parsedDate = (typeof date === 'string') ? new Date(date) : date;

    let result = [];
    let random = seededRandom(parsedDate.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }

    return new Promise((resolve) => {
        setTimeout(() => resolve(result), 300); // simulate 300ms delay
    });
};

export const submitAPI = function(formData) {
    console.log("Submitting form data:", formData);
    return Promise.resolve(true); // simulate async form submit
};
