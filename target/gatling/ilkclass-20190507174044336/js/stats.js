var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "611",
        "ok": "611",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2632",
        "ok": "2632",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1676",
        "ok": "1676",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "691",
        "ok": "691",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1607",
        "ok": "1607",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2376",
        "ok": "2376",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2622",
        "ok": "2622",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2629",
        "ok": "2629",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 10,
        "percentage": 20
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 38,
        "percentage": 76
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.846",
        "ok": "3.846",
        "ko": "-"
    }
},
contents: {
"req_req-1-47ac6": {
        type: "REQUEST",
        name: "req_1",
path: "req_1",
pathFormatted: "req_req-1-47ac6",
stats: {
    "name": "req_1",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "611",
        "ok": "611",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2632",
        "ok": "2632",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1676",
        "ok": "1676",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "691",
        "ok": "691",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1607",
        "ok": "1607",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2376",
        "ok": "2376",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2622",
        "ok": "2622",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2629",
        "ok": "2629",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 10,
        "percentage": 20
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 38,
        "percentage": 76
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.846",
        "ok": "3.846",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
