let keyframeIndex = 0;
let pie_to_bar = false;

let keyframes = [
    {
        activeVerse: 1,
        activeLines: [1],
        svgUpdate: draw01
    },
    {
        activeVerse: 1,
        activeLines: [2],
        svgUpdate: draw02
    },
    {
        activeVerse: 1,
        activeLines: [3],
        svgUpdate: drawRoseColours
    },
    {
        activeVerse: 2,
        activeLines: [1],
        svgUpdate: draw03
    },
    {
        activeVerse: 2,
        activeLines: [2],
        svgUpdate: draw04
    },
    {
        activeVerse: 2,
        activeLines: [3],
        svgUpdate: drawRoseColours1
    },
    {
        activeVerse: 3,
        activeLines: [1],
        svgUpdate: draw05
    },
    {
        activeVerse: 3,
        activeLines: [2],
        svgUpdate: draw06
    },
    {
        activeVerse: 3,
        activeLines: [3],
        //svgUpdate: () => makeRedBarHoverable()   I disable this because it conflicts with the "make word red only when click" requirement
        svgUpdate: drawRoseColours2
    },
    {
        activeVerse: 4,
        activeLines: [1],
        //svgUpdate: () => makeRedBarHoverable()
        svgUpdate: draw07
    },
    {
        activeVerse: 4,
        activeLines: [2],
        svgUpdate: draw08
    },
    {
        activeVerse: 4,
        activeLines: [3],
        //svgUpdate: () => makeRedBarHoverable()
        svgUpdate: drawRoseColours3
    },
    {
        activeVerse: 5,
        activeLines: [1],
        svgUpdate: draw09
    },
    {
        activeVerse: 5,
        activeLines: [2],
        svgUpdate: draw10
    },
    {
        activeVerse: 5,
        activeLines: [3],
        svgUpdate: drawRoseColours4
    },
    {
        activeVerse: 6,
        activeLines: [1],
        svgUpdate: draw11
    },
    {
        activeVerse: 6,
        activeLines: [2],
        svgUpdate: draw12
    },
    {
        activeVerse: 6,
        activeLines: [3],
        svgUpdate: drawRoseColours5
    },
    {
        activeVerse: 7,
        activeLines: [1],
        svgUpdate: draw13
    },
    {
        activeVerse: 7,
        activeLines: [2],
        svgUpdate: draw14
    },
    {
        activeVerse: 7,
        activeLines: [3],
        svgUpdate: drawRoseColours6
    },
    {
        activeVerse: 8,
        activeLines: [1],
        svgUpdate: draw15
    },
    {
        activeVerse: 8,
        activeLines: [2],
        svgUpdate: draw16
    },
    {
        activeVerse: 8,
        activeLines: [3],
        svgUpdate: drawRoseColours7
    },
    {
        activeVerse: 9,
        activeLines: [1],
        svgUpdate: draw17
    },
    {
        activeVerse: 9,
        activeLines: [2],
        svgUpdate: draw18
    },
    {
        activeVerse: 9,
        activeLines: [3],
        svgUpdate: drawRoseColours8
    },
    {
        activeVerse: 10,
        activeLines: [1],
        svgUpdate: draw19
    },
    {
        activeVerse: 10,
        activeLines: [2],
        svgUpdate: draw20
    },
    {
        activeVerse: 10,
        activeLines: [3],
        svgUpdate: drawRoseColours9
    },
    {
        activeVerse: 11,
        activeLines: [1],
        svgUpdate: draw21
    },
    {
        activeVerse: 11,
        activeLines: [2],
        svgUpdate: draw22
    },
    {
        activeVerse: 11,
        activeLines: [3],
        svgUpdate: drawRoseColours10
    },
    {
        activeVerse: 12,
        activeLines: [1],
        svgUpdate: draw23
    },
    {
        activeVerse: 12,
        activeLines: [2],
        svgUpdate: draw24
    },
    {
        activeVerse: 12,
        activeLines: [3],
        svgUpdate: drawRoseColours11
    }

]
// TODO add svgUpdate fields to keyframes

// TODO define global variables
const width = 500;
const height = 500;
let svg = d3.select("#svg");

// Declare global variables for the chart

// This will hold where the actual section of the graph where visual marks, in our case the bars, are being displayed
// Additionally we'll store the dimensions of this space too
let chart;
let chartWidth;
let chartHeight;

let pie_chart

// Declare both scales too
let xScale;
let yScale;


// TODO add event listeners to the buttons

// TODO write an asynchronous loadData function

// Initialise two global variables to store the data when it is loaded
let roseChartData;
let violetChartData;

let Caregiving__race;
let Cognitive_Decline__age;
let Cognitive_Decline__race;
let Mental_Health__gender;
let Nutrition_Physical_Activity_Obesity__race;
let Overall_Health__age;
let Overall_Health__race;
let Screenings_and_Vaccines__age;
let Screenings_and_Vaccines__race;
let Smoking_and_Alcohol_Use__age;
let Smoking_and_Alcohol_Use__race;

let Percentage_of_older_adults_with_a_lifetime_diagnosis_of_depression_race;
let Percentage_of_older_adults_who_are_experiencing_frequent_mental_distress_race;
let Percentage_of_older_adults_with_a_lifetime_diagnosis_of_depression_gender;
let Percentage_of_older_adults_who_are_experiencing_frequent_mental_distress_gender;
let Percentage_of_older_adults_who_report_having_a_disability_includes_limitations_related_to_sensory_or_mobility_impairments_or_a_physical_mental_or_emotional_condition_race;
let Percentage_of_older_adults_who_report_having_lost_5_or_fewer_teeth_due_to_decay_or_gum_disease_race;
let Percentage_of_older_adults_who_report_having_lost_5_or_fewer_teeth_due_to_decay_or_gum_disease_age;
let Percentage_of_older_adults_ever_told_they_have_arthritis_age;
let Average_of_20_or_more_hours_of_care_per_week_provided_to_a_friend_or_family_member_race;
let Percentage_of_older_adults_who_provided_care_for_a_friend_or_family_member_within_the_past_month_race;
let Percentage_of_older_adults_who_are_currently_obese_with_a_body_mass_index_BMI_of_30_or_more_race;
let Percentage_of_older_adults_who_have_not_had_any_leisure_time_physical_activity_in_the_past_month_race;
let Percentage_of_at_risk_adults_have_diabetes_asthma_cardiovascular_disease_or_currently_smoke_who_ever_had_a_pneumococcal_vaccine_age;
let Percentage_of_older_adult_women_with_an_intact_cervix_who_had_a_Pap_test_within_the_past_3_years_age;
let Percentage_of_at_risk_adults_have_diabetes_asthma_cardiovascular_disease_or_currently_smoke_who_ever_had_a_pneumococcal_vaccine_race;
let Percentage_of_older_adults_who_had_either_a_home_blood_stool_test_within_the_past_year_or_a_sigmoidoscopy_or_colonoscopy_within_the_past_10_years_race;
let Percentage_of_older_adults_who_have_smoked_at_least_100_cigarettes_in_their_entire_life_and_still_smoke_every_day_or_some_days_race;
let Percentage_of_older_adults_who_reported_binge_drinking_within_the_past_30_days_race;
let Percentage_of_older_adults_who_have_smoked_at_least_100_cigarettes_in_their_entire_life_and_still_smoke_every_day_or_some_days_age;
let Percentage_of_older_adults_who_reported_binge_drinking_within_the_past_30_days_age;
let Percentage_of_older_adults_with_subjective_cognitive_decline_or_memory_loss_who_reported_talking_with_a_health_care_professional_about_it_race;
let Percentage_of_older_adults_who_reported_subjective_cognitive_decline_or_memory_loss_that_interferes_with_their_ability_to_engage_in_social_activities_or_household_chores_race;
let Percentage_of_older_adults_who_reported_subjective_cognitive_decline_or_memory_loss_that_interferes_with_their_ability_to_engage_in_social_activities_or_household_chores_age;
let Percentage_of_older_adults_with_subjective_cognitive_decline_or_memory_loss_who_reported_talking_with_a_health_care_professional_about_it_age;


let disparityScoreMap;


// You have to use the async keyword so that javascript knows that this function utilises promises and may not return immediately
async function loadData() {


    await d3.json("disparity_scores.json").then(data => {
        disparityScoreMap = data;
        console.log("disparityScoreMap" + disparityScoreMap)
    });


    //console.log("aaaaa")
    // Because d3.json() uses promises we have to use the keyword await to make sure each line completes before moving on to the next line
    await d3.json("mental_health_race.json").then(data => {
        //console.log("1212")
        // Inside the promise we set the global variable equal to the data being loaded from the file
        roseChartData = data;
        console.log("data" + roseChartData)
    });


    await d3.json("Caregiving__race.json").then(data => {
        Caregiving__race = data;
    });

    await d3.json("Cognitive_Decline__age.json").then(data => {
        Cognitive_Decline__age = data;
    });

    await d3.json("Cognitive_Decline__race.json").then(data => {
        Cognitive_Decline__race = data;
    });

    await d3.json("Mental_Health__gender.json").then(data => {
        Mental_Health__gender = data;
    });

    await d3.json("Nutrition_Physical_Activity_Obesity__race.json").then(data => {
        Nutrition_Physical_Activity_Obesity__race = data;
    });

    await d3.json("Overall_Health__age.json").then(data => {
        Overall_Health__age = data;
    });

    await d3.json("Overall_Health__race.json").then(data => {
        Overall_Health__race = data;
    });

    await d3.json("Screenings_and_Vaccines__age.json").then(data => {
        Screenings_and_Vaccines__age = data;
    });

    await d3.json("Screenings_and_Vaccines__race.json").then(data => {
        Screenings_and_Vaccines__race = data;
    });

    await d3.json("Smoking_and_Alcohol_Use__age.json").then(data => {
        Smoking_and_Alcohol_Use__age = data;
    });

    await d3.json("Smoking_and_Alcohol_Use__race.json").then(data => {
        Smoking_and_Alcohol_Use__race = data;
    });




    await d3.json("Percentage_of_older_adults_with_a_lifetime_diagnosis_of_depression_race.json").then(data => {
        Percentage_of_older_adults_with_a_lifetime_diagnosis_of_depression_race = data;
    });

    await d3.json("Percentage_of_older_adults_who_are_experiencing_frequent_mental_distress_race.json").then(data => {
        Percentage_of_older_adults_who_are_experiencing_frequent_mental_distress_race = data;
    });

    await d3.json("Percentage_of_older_adults_with_a_lifetime_diagnosis_of_depression_gender.json").then(data => {
        Percentage_of_older_adults_with_a_lifetime_diagnosis_of_depression_gender = data;
    });

    await d3.json("Percentage_of_older_adults_who_are_experiencing_frequent_mental_distress_gender.json").then(data => {
        Percentage_of_older_adults_who_are_experiencing_frequent_mental_distress_gender = data;
    });

    await d3.json("Percentage_of_older_adults_who_report_having_a_disability_includes_limitations_related_to_sensory_or_mobility_impairments_or_a_physical_mental_or_emotional_condition_race.json").then(data => {
        Percentage_of_older_adults_who_report_having_a_disability_includes_limitations_related_to_sensory_or_mobility_impairments_or_a_physical_mental_or_emotional_condition_race = data;
    });

    await d3.json("Percentage_of_older_adults_who_report_having_lost_5_or_fewer_teeth_due_to_decay_or_gum_disease_race.json").then(data => {
        Percentage_of_older_adults_who_report_having_lost_5_or_fewer_teeth_due_to_decay_or_gum_disease_race = data;
    });

    await d3.json("Percentage_of_older_adults_who_report_having_lost_5_or_fewer_teeth_due_to_decay_or_gum_disease_age.json").then(data => {
        Percentage_of_older_adults_who_report_having_lost_5_or_fewer_teeth_due_to_decay_or_gum_disease_age = data;
    });

    await d3.json("Percentage_of_older_adults_ever_told_they_have_arthritis_age.json").then(data => {
        Percentage_of_older_adults_ever_told_they_have_arthritis_age = data;
    });

    await d3.json("Average_of_20_or_more_hours_of_care_per_week_provided_to_a_friend_or_family_member_race.json").then(data => {
        Average_of_20_or_more_hours_of_care_per_week_provided_to_a_friend_or_family_member_race = data;
    });

    await d3.json("Percentage_of_older_adults_who_provided_care_for_a_friend_or_family_member_within_the_past_month_race.json").then(data => {
        Percentage_of_older_adults_who_provided_care_for_a_friend_or_family_member_within_the_past_month_race = data;
    });

    await d3.json("Percentage_of_older_adults_who_are_currently_obese_with_a_body_mass_index_BMI_of_30_or_more_race.json").then(data => {
        Percentage_of_older_adults_who_are_currently_obese_with_a_body_mass_index_BMI_of_30_or_more_race = data;
    });

    await d3.json("Percentage_of_older_adults_who_have_not_had_any_leisure_time_physical_activity_in_the_past_month_race.json").then(data => {
        Percentage_of_older_adults_who_have_not_had_any_leisure_time_physical_activity_in_the_past_month_race = data;
    });

    await d3.json("Percentage_of_at_risk_adults_have_diabetes_asthma_cardiovascular_disease_or_currently_smoke_who_ever_had_a_pneumococcal_vaccine_age.json").then(data => {
        Percentage_of_at_risk_adults_have_diabetes_asthma_cardiovascular_disease_or_currently_smoke_who_ever_had_a_pneumococcal_vaccine_age = data;
    });

    await d3.json("Percentage_of_older_adult_women_with_an_intact_cervix_who_had_a_Pap_test_within_the_past_3_years_age.json").then(data => {
        Percentage_of_older_adult_women_with_an_intact_cervix_who_had_a_Pap_test_within_the_past_3_years_age = data;
    });

    await d3.json("Percentage_of_at_risk_adults_have_diabetes_asthma_cardiovascular_disease_or_currently_smoke_who_ever_had_a_pneumococcal_vaccine_race.json").then(data => {
        Percentage_of_at_risk_adults_have_diabetes_asthma_cardiovascular_disease_or_currently_smoke_who_ever_had_a_pneumococcal_vaccine_race = data;
    });

    await d3.json("Percentage_of_older_adults_who_had_either_a_home_blood_stool_test_within_the_past_year_or_a_sigmoidoscopy_or_colonoscopy_within_the_past_10_years_race.json").then(data => {
        Percentage_of_older_adults_who_had_either_a_home_blood_stool_test_within_the_past_year_or_a_sigmoidoscopy_or_colonoscopy_within_the_past_10_years_race = data;
    });

    await d3.json("Percentage_of_older_adults_who_have_smoked_at_least_100_cigarettes_in_their_entire_life_and_still_smoke_every_day_or_some_days_race.json").then(data => {
        Percentage_of_older_adults_who_have_smoked_at_least_100_cigarettes_in_their_entire_life_and_still_smoke_every_day_or_some_days_race = data;
    });

    await d3.json("Percentage_of_older_adults_who_reported_binge_drinking_within_the_past_30_days_race.json").then(data => {
        Percentage_of_older_adults_who_reported_binge_drinking_within_the_past_30_days_race = data;
    });

    await d3.json("Percentage_of_older_adults_who_have_smoked_at_least_100_cigarettes_in_their_entire_life_and_still_smoke_every_day_or_some_days_age.json").then(data => {
        Percentage_of_older_adults_who_have_smoked_at_least_100_cigarettes_in_their_entire_life_and_still_smoke_every_day_or_some_days_age = data;
    });

    await d3.json("Percentage_of_older_adults_who_reported_binge_drinking_within_the_past_30_days_age.json").then(data => {
        Percentage_of_older_adults_who_reported_binge_drinking_within_the_past_30_days_age = data;
    });

    await d3.json("Percentage_of_older_adults_with_subjective_cognitive_decline_or_memory_loss_who_reported_talking_with_a_health_care_professional_about_it_race.json").then(data => {
        Percentage_of_older_adults_with_subjective_cognitive_decline_or_memory_loss_who_reported_talking_with_a_health_care_professional_about_it_race = data;
    });

    await d3.json("Percentage_of_older_adults_who_reported_subjective_cognitive_decline_or_memory_loss_that_interferes_with_their_ability_to_engage_in_social_activities_or_household_chores_race.json").then(data => {
        Percentage_of_older_adults_who_reported_subjective_cognitive_decline_or_memory_loss_that_interferes_with_their_ability_to_engage_in_social_activities_or_household_chores_race = data;
    });

    await d3.json("Percentage_of_older_adults_who_reported_subjective_cognitive_decline_or_memory_loss_that_interferes_with_their_ability_to_engage_in_social_activities_or_household_chores_age.json").then(data => {
        Percentage_of_older_adults_who_reported_subjective_cognitive_decline_or_memory_loss_that_interferes_with_their_ability_to_engage_in_social_activities_or_household_chores_age = data;
    });

    await d3.json("Percentage_of_older_adults_with_subjective_cognitive_decline_or_memory_loss_who_reported_talking_with_a_health_care_professional_about_it_age.json").then(data => {
        Percentage_of_older_adults_with_subjective_cognitive_decline_or_memory_loss_who_reported_talking_with_a_health_care_professional_about_it_age = data;
    });



    /*await d3.json("violet_colours.json").then(data => {
        violetChartData = data;
        console.log("data" + violetChartData)
    });*/
}

// TODO call that in our initalise function



function highlightAllColours() {
    console.log("highlightAll")
    // TODO select bar that has the right value
    // TODO update it's fill colour
    svg.selectAll(".bar")
        .transition() // call transition immediately before the attribute that you are changing
        .duration(500) // decide how long you want that transition to last in milliseconds
        .attr("fill", function (d) {
            // We only want to update the colour field is equal to what we have passed
            // Otherwise we want to reset the colour value to the default (#999)
            if (d.colour === "Red") {
                return "red";
            } else if (d.colour === "Pink") {
                return "pink";
            } else if (d.colour === "Yellow") {
                return "yellow";
            } else if (d.colour === "White") {
                return "white";
            } else if (d.colour === "Orange") {
                return "orange";
            }
        })
    //TODO add a transition to make it smooth
    return
}

function highlightColour(colourName, highlightColour) {
    console.log("highlight")
    // TODO select bar that has the right value
    // TODO update it's fill colour
    svg.selectAll(".bar")
        .transition() // call transition immediately before the attribute that you are changing
        .duration(500) // decide how long you want that transition to last in milliseconds
        .attr("fill", function (d) {
            // We only want to update the colour field is equal to what we have passed
            // Otherwise we want to reset the colour value to the default (#999)
            if (d.colour === colourName) {
                latest_hovered_bar = d3.select(this)
                original_color = latest_hovered_bar.attr("fill");
                return highlightColour;
            } else {
                return "#999"
            }
        })
    //TODO add a transition to make it smooth
    return
}

function highlightSingleColour(colourName, highlightColour) {
    console.log("highlight")
    // TODO select bar that has the right value
    // TODO update it's fill colour
    svg.selectAll(".bar")
        .filter(d => d.colour === colourName)
        .transition() // call transition immediately before the attribute that you are changing
        .duration(500) // decide how long you want that transition to last in milliseconds
        .attr("fill", function (d) {
            // We only want to update the colour field is equal to what we have passed
            // Otherwise we want to reset the colour value to the default (#999)
            if (d.colour === colourName) {
                latest_hovered_bar = d3.select(this)
                original_color = latest_hovered_bar.attr("fill");
                return highlightColour;
            } else {
                return
            }
        })
    //TODO add a transition to make it smooth
    return
}


function drawPieChart(data, title) {
    /*svg.selectAll("*").remove();

    pie_chart = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");*/

    const pie_gen = d3.pie()
        .value(d => d.count) // turn group value into angle
        .sort(null);

    const arc_gen = d3.arc() // already has radius, waiting for angles to generate arcs
        .innerRadius(0) //if not zero, will be a ring
        .outerRadius(200);

    pie_chart.selectAll("path") //rect for rectangles, path for arcs
        .data(pie_gen(data))
        .enter()
        .append("path")
        .attr("d", arc_gen) // arc generator converts angles and radius into path commands to draw arcs
        .attr("fill", function (d) {
            d = d.data;
            // We only want to update the colour field is equal to what we have passed
            // Otherwise we want to reset the colour value to the default (#999)
            if (d.colour === "Red") {
                return "red";
            } else if (d.colour === "Pink") {
                return "pink";
            } else if (d.colour === "Yellow") {
                return "yellow";
            } else if (d.colour === "White") {
                return "white";
            } else if (d.colour === "Orange") {
                return "orange";
            }

        })
        .transition()
        .duration(1000)
        .attrTween("d", function (d) {
            const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d); //starts from a line, end in d.startAngle, d.endAngle
            return function (t) {
                return arc_gen(interpolate(t)); //t is between 0 and 1 provided by attrTween, interpolate(t) returns two angles between 0 and d.startAngle/endAngle
            };
        })

    // Add labels
    pie_chart.selectAll("text")
        .data(pie_gen(data))
        .enter()
        .append("text")
        .attr("transform", d => "translate(" + arc_gen.centroid(d) + ")")
        .attr("text-anchor", "middle") // Center the text
        .text(d => d.data.colour);


    // Add title
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .style("fill", "white")
        .text(title);
}

function drawBarChart(data, title) {
    svg.selectAll("*").remove();

    // Define the margin so that there is space around the vis for axes and labels
    const margin = { top: 30, right: 30, bottom: 50, left: 50 };
    let chartWidth = width - margin.left - margin.right;
    let chartHeight = height - margin.top - margin.bottom;

    // Create a 'group' variable to hold the chart, these are used to keep similar items together in d3/with svgs
    let chart = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    // Define an x scale which will assign a spot on the x axis to each of the unique values of colour in the dataset
    let xScale = d3.scaleBand()
        .domain(data.map(d => d.colour))
        .range([0, chartWidth])
        .padding(0.1);

    let yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.count)])
        .nice()
        .range([chartHeight, 0]);

    // Create bars
    chart.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => xScale(d.colour)) // This arrow function notation is a more concise way of calling a function on each bar
        .attr("y", d => yScale(d.count))
        .attr("width", xScale.bandwidth())
        .attr("height", d => chartHeight - yScale(d.count))
        .attr("fill", "#C18D68"); // Set the bars to be a light grey colour

    // Add x-axis
    chart.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + chartHeight + ")")
        .call(d3.axisBottom(xScale))
        .selectAll("text");

    // Add y-axis
    chart.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(yScale))
        .selectAll("text");

    // Add title
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .style("fill", "white")
        .text(title);
}

// TODO Write a new function updateBarchart so that it updates the existing svg rather than rewriting it
// TODO Update the xScale domain to match new order
// TODO Update the yScale domain for new values

// TODO select all the existing bars
// TODO remove any bars no longer in the dataset
// TODO move any bars that already existed to their correct spot
// TODO Add any new bars

// TODO update the x and y axis

// TODO update the title

// TODO add some animation to this


function updatePieChart(data, title) {
    svg.select(".x-axis").remove();
    svg.select(".y-axis").remove();
    svg.select("#chart-title").remove();

    const pie_gen = d3.pie()
        .value(d => d.count) // turn group value into angle
        .sort(null);

    const arc_gen = d3.arc() // already has radius, waiting for angles to generate arcs
        .innerRadius(0) //if not zero, will be a ring
        .outerRadius(200);

    //bind new dataset to bars by color.
    const bars = chart.selectAll(".bar")


    //exit rect bars
    bars.transition() // Declare we want to do a transition
        .duration(1000) // This one is going to last for one second
        .attr("y", chartHeight) //move down
        .attr("height", 0) //while shrink height to 0.
        .remove();


    //enter pie slices
    setTimeout(() => drawPieChart(data, title), 1000);


}


// As with the draw bar chart function we will pass the data we want to draw and the title of the graph
// There might be situations where we want to update the chart without updating the title
// To handle this we pass a default value to the title of an empty string
function updateBarChart(data, title = "") {
    //Update our scales so that they match the new data
    //As our svg is staying the same dimensions each time we only need to update the domains
    xScale.domain(data.map(d => d.colour));
    yScale.domain([0, d3.max(data, d => d.count)]).nice();

    // We want to make a selection of the existing bars in the chart
    // This line of code will bind the new data we have loaded to our bars
    const bars = chart.selectAll(".bar")
        .data(data, d => d.colour);

    // First we want to remove any bars that we no longer want to display
    // bars.exit() is a d3 selection that will return any bars that are not in the new selection.
    // when we call this function to initially draw the bar chart this won't return anything because their were no bars to begin with
    // when we call this to draw the violet bar chart when the rose one was being displayed the exit selection will be the bars that had values in the rose dataset but don't exist in the violet one
    // calling remove on this selection will remove all these bars from the graph
    bars.exit()
        .transition() // Declare we want to do a transition
        .duration(1000) // This one is going to last for one second
        .attr("y", chartHeight) //move down
        .attr("height", 0) //while shrink height to 0.
        .remove();

    // Now we want to move any bars that had values in the old dataset but now have new values or locations
    bars.transition()
        .duration(1000)
        .attr("x", d => xScale(d.colour))
        .attr("y", d => yScale(d.count))
        .attr("height", d => chartHeight - yScale(d.count))
        .attr("width", xScale.bandwidth());

    // Finally we will add any bars that are new
    // To do that we will use the d3 built in function .enter() which provides a selection of any new values
    bars.enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => xScale(d.colour))
        .attr("width", xScale.bandwidth())
        .attr("fill", "white")
        .transition() // Declare we want to do a transition
        .duration(1000) // This one is going to last for one second
        .attr("y", d => yScale(d.count))
        .attr("height", d => chartHeight - yScale(d.count));

    // Next let's update the axes so they are displayed correctly
    chart.select(".x-axis")
        .transition()
        .duration(1000)
        .call(d3.axisBottom(xScale));

    chart.select(".y-axis")
        .transition()
        .duration(1000)
        .call(d3.axisLeft(yScale));


    // And finally if a new title has been specified we will update the title too
    /*if (title.length > 0) {
        svg.select("#chart-title")
            .text(title);
    }*/

    const wrapSvgText = (text, lineLength = 60) => {
        const words = text.split(" ");
        const lines = [];
        let currentLine = "";

        words.forEach(word => {
            if ((currentLine + " " + word).trim().length > lineLength) {
                lines.push(currentLine.trim());
                currentLine = word;
            } else {
                currentLine += " " + word;
            }
        });

        if (currentLine.trim()) {
            lines.push(currentLine.trim());
        }

        return lines;
    };

    /*if (title.length > 0) {
        const titleSelection = svg.select("#chart-title");
        const lines = wrapSvgText(title, 60);

        titleSelection.selectAll("tspan").remove();

        lines.forEach((line, i) => {
            titleSelection.append("tspan")
                .attr("x", chartWidth / 2)
                .attr("dy", i === 0 ? 0 : "1.2em")  // vertical offset for each line
                .text(line);
        });
    }*/

    //split parameter into title and x label
    if (title.length > 0) {
        const colonIndex = title.lastIndexOf(":");
        let mainTitle = title;
        let xAxisLabel = "";

        if (colonIndex > 0 && colonIndex < title.length - 1) {
            mainTitle = title.slice(0, colonIndex).trim();
            xAxisLabel = title.slice(colonIndex + 1).trim();
        }

        const titleSelection = svg.select("#chart-title");
        const lines = wrapSvgText(mainTitle, 60);
        titleSelection.selectAll("tspan").remove();

        lines.forEach((line, i) => {
            titleSelection.append("tspan")
                .attr("x", chartWidth / 2)
                .attr("dy", i === 0 ? 0 : "1.2em")
                .text(line);
        });

        if (xAxisLabel !== "") {
            chart.select("#x-axis-label").remove();
            chart.append("text")
                .attr("id", "x-axis-label")
                .attr("text-anchor", "middle")
                .attr("x", chartWidth / 2)
                .attr("y", chartHeight + 40)
                .style("fill", "white")
                .style("font-size", "14px")
                .style("font-family", "sans-serif") 
                .text(xAxisLabel);
        }
    }

    //add label to y axis
    chart.select("#y-axis-label").remove();

    chart.append("text")
        .attr("id", "y-axis-label")
        .attr("text-anchor", "middle")
        .attr("transform", `translate(-35, ${chartHeight / 2}) rotate(-90)`)
        .style("fill", "white")
        .style("font-size", "14px")
        .style("font-family", "sans-serif")
        .text("avg. health score of the group");


}

function forwardClicked() {
    console.log("before: " + keyframeIndex)
    // Make sure we don't let the keyframeIndex go out of range
    if (keyframeIndex < keyframes.length - 1) {
        keyframeIndex++;
        drawKeyframe(keyframeIndex);
    }
    console.log("after: " + keyframeIndex)
}

function backwardClicked() {
    console.log("before: " + keyframeIndex)
    if (keyframeIndex > 0) {
        if (keyframeIndex == 10) {
            pie_to_bar = true;
            keyframeIndex--;
            drawKeyframe(keyframeIndex);
        } else {
            keyframeIndex--;
            drawKeyframe(keyframeIndex);
        }
    }
    console.log("after: " + keyframeIndex)
}



function drawKeyframe(kfi) {
    //console.log("1")
    // TODO get keyframe at index position
    let kf = keyframes[kfi]
    // TODO reset any active lines
    resetActiveLines()
    //console.log("2")
    // TODO update the active verse
    updateActiveVerse(kf.activeVerse)
    //console.log("3")
    // TODO update any active lines
    // Iterate over the active lines for this keyframe and update the active lines one by one
    for (line of kf.activeLines) {
        updateActiveLine(kf.activeVerse, line);
    }
    //console.log("4")
    // TODO update the svg
    // We need to check if their is an svg update function defined or not
    if (pie_to_bar == true) {
        back_to_bar();
        pie_to_bar = false
    } else if (kf.svgUpdate) {
        console.log("right")
        // If there is we call it like this
        kf.svgUpdate();
        //console.log("7")
    }
    //console.log("5")
}


function back_to_bar() {
    const arc_gen = d3.arc() // already has radius, waiting for angles to generate arcs
        .innerRadius(0) //if not zero, will be a ring
        .outerRadius(200);

    pie_chart.selectAll("text").remove();

    //exit pie slices
    pie_chart.selectAll("path")
        .transition()
        .duration(1000)
        .attrTween("d", function (d) {
            const interpolate = d3.interpolate(d, { startAngle: 0, endAngle: 0 });
            return function (t) {
                return arc_gen(interpolate(t));
            };
        })
        .remove();

    xScale = d3.scaleBand()
        .domain([])
        .range([0, chartWidth])
        .padding(0.1);

    yScale = d3.scaleLinear()
        .domain([])
        .nice()
        .range([chartHeight, 0]);

    // Add x-axis
    chart.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${chartHeight})`)
        .call(d3.axisBottom(xScale))
        .selectAll("text");

    // Add y-axis
    chart.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(yScale))
        .selectAll("text");

    // Add title
    svg.append("text")
        .attr("id", "chart-title")
        .attr("x", width / 2)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .style("fill", "white")
        .text("");

    //enter rect bars
    setTimeout(() => {
        drawRoseColours();
    }, 1000);
}

function resetActiveLines() {
    // Reset the active-line class for all of the lines
    d3.selectAll(".line").classed("active-line", false);
}

function updateActiveVerse(id) {
    // Reset the current active verse - in some scenarios you may want to have more than one active verse, but I will leave that as an exercise for you to figure out
    d3.selectAll(".verse").classed("active-verse", false);

    // Update the class list of the desired verse so that it now includes the class "active-verse"
    d3.select("#verse" + id).classed("active-verse", true);

    // Scroll the column so the chosen verse is centred
    scrollLeftColumnToActiveVerse(id);

}

function updateActiveLine(vid, lid) {
    // Select the correct verse
    let thisVerse = d3.select("#verse" + vid);
    // Update the class list of the relevant lines
    thisVerse.select("#line" + lid).classed("active-line", true);
}



// TODO write a function to scroll the left column to the right place
function scrollLeftColumnToActiveVerse(id) {
    // First we want to select the div that is displaying our text content
    var leftColumn = document.querySelector(".left-column-content");

    // Now we select the actual verse we would like to be centred, this will be the <ul> element containing the verse
    var activeVerse = document.getElementById("verse" + id);

    // The getBoundingClientRect() is a built in function that will return an object indicating the exact position
    // Of the relevant element relative to the current viewport.
    // To see a full breakdown of this read the documentation here: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    var verseRect = activeVerse.getBoundingClientRect();
    var leftColumnRect = leftColumn.getBoundingClientRect();

    // Now we calculate the exact location we would like to scroll to in order to centre the relevant verse
    // Take a moment to rationalise that this calculation does what you expect it to
    var desiredScrollTop = verseRect.top + leftColumn.scrollTop - leftColumnRect.top - (leftColumnRect.height - verseRect.height) / 2;




    //left column top=distance from top of left column to viewport (top of screen) (the height of the css rose title)
    //verse top-left column top=the distance from top of verse to top of left column
    //verse top-left column top+ leftColumn.scrollTop =the distance from top of verse to top of the scrollable element

    //when verse is inside left column, verse top-left column top<height of left column
    //for longest case, 
    //verse top=top of screen to bottom of left column+the "depth" of the verse out of screen, 
    //verse top-left column top=distance from top of left column to bottom of screen+the "depth" of the verse out of screen,
    //verse top-left column top+scrolltop=scrolled length+distance from top of left column to bottom of screen+the "depth" of the verse out of screen


    //scroll this amount scroll the verse to the top of screen
    //(leftColumnRect.height - verseRect.height) / 2=remaining space when verse is fully inside, will be 0 if verse exceeds the leftcolumn div
    //scrollTo scrolls absolute position, that's why need to add scrollTop.



    // Finally we scroll to the right location using another built in function.
    // The 'smooth' value means that this is animated rather than happening instantly
    leftColumn.scrollTo({
        top: desiredScrollTop,
        behavior: 'smooth'
    })
}





// TODO select the div displaying the left column content
// TODO select the verse we want to display
// TODO calculate the bounding rectangles of both of these elements
// TODO calculate the desired scroll position
// TODO scroll to the desired position
// TODO call this function when updating the active verse

// TODO write a function to initialise the svg properly

function initialiseSVG() {
    svg.attr("width", width);
    svg.attr("height", height);

    svg.selectAll("*").remove();

    const margin = { top: 80, right: 30, bottom: 50, left: 50 };
    chartWidth = width - margin.left - margin.right;
    chartHeight = height - margin.top - margin.bottom;

    chart = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    pie_chart = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    xScale = d3.scaleBand()
        .domain([])
        .range([0, chartWidth])
        .padding(0.1);

    yScale = d3.scaleLinear()
        .domain([])
        .nice()
        .range([chartHeight, 0]);

    // Add x-axis
    chart.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${chartHeight})`)
        .call(d3.axisBottom(xScale))
        .selectAll("text");

    // Add y-axis
    chart.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(yScale))
        .selectAll("text");

    // Add title
    svg.append("text")
        .attr("id", "chart-title")
        .attr("x", width / 2)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .style("fill", "white")
        .text("");
}


let word_original_color = null;
let latest_clicked_bar = null;
let click_on_red = 0

function makeRedClickable() {
    d3.select(".red-span").on("click", () => highlightColour("Red", "red"));
}

function makeRedBarClickable() {
    console.log("click on red:" + click_on_red)

    // Select the bar associated with the "red" value
    const redBar = chart.select(".bar").filter(d => d.colour === "Red");

    // Add a mouseover event listener
    redBar.on("click", () => {
        if (click_on_red == 0) {
            d3.selectAll(".hover-red-span").classed("red-text", true); //This will select all elements with the class name "red-span" not just one.
            click_on_red = 1;
        } else {
            d3.selectAll(".hover-red-span").classed("red-text", false);
            click_on_red = 0;
        }
    });
}




function makeRedBarHoverable() {
    // Select the bar associated with the "red" value
    const redBar = chart.select(".bar").filter(d => d.colour === "Red");

    // Add a mouseover event listener
    redBar.on("mouseover", () => {
        d3.selectAll(".red-span").classed("red-text", true); //This will select all elements with the class name "red-span" not just one.
    });

};



let original_color = null; //bar original color
let latest_hovered_bar = null; //the bar corresponding to the last hovered word

function makeRedHoverable() {
    original_color = null
    d3.selectAll(".hover-red-span")
        .on("mouseover", () => { highlightSingleColour("Red", "red"); console.log("red!!"); })
        .on("mouseleave", () => {
            latest_hovered_bar
                .interrupt() //avoid error when mouse in and mouse out too fast
                .attr("fill", original_color);
        })
}

function makePurpleHoverable() {
    d3.selectAll(".hover-purple-span")
        .on("mouseover", () => highlightSingleColour("Purple", "purple"))
        .on("mouseleave", () => {
            if (latest_hovered_bar) { // if purple bar chart is not drawn yet, do nothing
                latest_hovered_bar
                    .interrupt() //avoid error when mouse in and mouse out too fast
                    .attr("fill", original_color);
            }
        })
}

async function initialise() {
    await loadData();
    initialiseSVG();
    drawKeyframe(keyframeIndex);
    // Call the new function when we initialise the page
    //makeRedClickable();
    //makeRedHoverable();
    //makePurpleHoverable();

    /*
    console.log("0")
    // TODO draw the first keyframe
    drawKeyframe(keyframeIndex);
    // TODO load the data
    console.log("start")
    await loadData()
    console.log("end")
    // TODO initalise the SVG
    console.log("1")
    initialiseSVG();
    console.log("2")
    // TODO make the word red clickable*/

    initParallelPlot();

}


initialise();


document.getElementById("forward-button").addEventListener("click", forwardClicked);
document.getElementById("backward-button").addEventListener("click", backwardClicked);





// there will be many drawing functions.

// TODO draw a bar chart from the rose dataset
function drawRoseColours() {
    //drawBarChart(roseChartData, "Distribution of Rose Colours");
    if (keyframeIndex == 8) {
        temp = [...roseChartData]
        temp = temp.sort((a, b) => d3.descending(a.count, b.count))
        updateBarChart(temp, "Distribution of Rose Colours");
        return
    }
    updateBarChart(roseChartData, "race disparity on mental health");
    return
}

function drawRoseColours1() {
    updateBarChart(Mental_Health__gender, "gender disparity on mental health");
    return;
}

function drawRoseColours2() {
    updateBarChart(Overall_Health__race, "race disparity on overall health");
    return;
}

function drawRoseColours3() {
    updateBarChart(Overall_Health__age, "age disparity on overall health");
    return;
}

function drawRoseColours4() {
    updateBarChart(Caregiving__race, "race disparity on caregiving");
    return;
}

function drawRoseColours5() {
    updateBarChart(Nutrition_Physical_Activity_Obesity__race, "race disparity on nutrition/physical activity/obesity");
    return;
}

function drawRoseColours6() {
    updateBarChart(Screenings_and_Vaccines__age, "age disparity on screenings and vaccines");
    return;
}

function drawRoseColours7() {
    updateBarChart(Screenings_and_Vaccines__race, "race disparity on screenings and vaccines");
    return;
}

function drawRoseColours8() {
    updateBarChart(Smoking_and_Alcohol_Use__race, "race disparity on smoking and alcohol use");
    return;
}

function drawRoseColours9() {
    updateBarChart(Smoking_and_Alcohol_Use__age, "age disparity on smoking and alcohol use");
    return;
}

function drawRoseColours10() {
    updateBarChart(Cognitive_Decline__race, "race disparity on cognitive decline");
    return;
}

function drawRoseColours11() {
    updateBarChart(Cognitive_Decline__age, "age disparity on cognitive decline");
    return;
}



// TODO draw a bar chart from the violet dataset
function drawVioletColours() {
    //drawBarChart(violetChartData, "Distribution of Violet Colours");
    updateBarChart(violetChartData, "Distribution of Violet Colours");
    return
}

function draw01() {
    updateBarChart(Percentage_of_older_adults_with_a_lifetime_diagnosis_of_depression_race, "Percentage of older adults with a lifetime diagnosis of depression : race");
    return;
}

function draw02() {
    updateBarChart(Percentage_of_older_adults_who_are_experiencing_frequent_mental_distress_race, "Percentage of older adults who are experiencing frequent mental distress : race");
    return;
}

function draw03() {
    updateBarChart(Percentage_of_older_adults_with_a_lifetime_diagnosis_of_depression_gender, "Percentage of older adults with a lifetime diagnosis of depression : gender");
    return;
}

function draw04() {
    updateBarChart(Percentage_of_older_adults_who_are_experiencing_frequent_mental_distress_gender, "Percentage of older adults who are experiencing frequent mental distress : gender");
    return;
}

function draw05() {
    updateBarChart(Percentage_of_older_adults_who_report_having_a_disability_includes_limitations_related_to_sensory_or_mobility_impairments_or_a_physical_mental_or_emotional_condition_race, "Percentage of older adults who report having a disability (includes limitations related to sensory or mobility impairments or a physical, mental, or emotional condition) : race");
    return;
}

function draw06() {
    updateBarChart(Percentage_of_older_adults_who_report_having_lost_5_or_fewer_teeth_due_to_decay_or_gum_disease_race, "Percentage of older adults who report having lost 5 or fewer teeth due to decay or gum disease : race");
    return;
}

function draw07() {
    updateBarChart(Percentage_of_older_adults_who_report_having_lost_5_or_fewer_teeth_due_to_decay_or_gum_disease_age, "Percentage of older adults who report having lost 5 or fewer teeth due to decay or gum disease : age");
    return;
}

function draw08() {
    updateBarChart(Percentage_of_older_adults_ever_told_they_have_arthritis_age, "Percentage of older adults ever told they have arthritis : age");
    return;
}

function draw09() {
    updateBarChart(Average_of_20_or_more_hours_of_care_per_week_provided_to_a_friend_or_family_member_race, "Average of 20 or more hours of care per week provided to a friend or family member : race");
    return;
}

function draw10() {
    updateBarChart(Percentage_of_older_adults_who_provided_care_for_a_friend_or_family_member_within_the_past_month_race, "Percentage of older adults who provided care for a friend or family member within the past month : race");
    return;
}

function draw11() {
    updateBarChart(Percentage_of_older_adults_who_are_currently_obese_with_a_body_mass_index_BMI_of_30_or_more_race, "Percentage of older adults who are currently obese, with a body mass index (BMI) of 30 or more : race");
    return;
}

function draw12() {
    updateBarChart(Percentage_of_older_adults_who_have_not_had_any_leisure_time_physical_activity_in_the_past_month_race, "Percentage of older adults who have not had any leisure time physical activity in the past month : race");
    return;
}

function draw13() {
    updateBarChart(Percentage_of_at_risk_adults_have_diabetes_asthma_cardiovascular_disease_or_currently_smoke_who_ever_had_a_pneumococcal_vaccine_age, "Percentage of at risk adults (have diabetes, asthma, cardiovascular disease or currently smoke) who ever had a pneumococcal vaccine : age");
    return;
}

function draw14() {
    updateBarChart(Percentage_of_older_adult_women_with_an_intact_cervix_who_had_a_Pap_test_within_the_past_3_years_age, "Percentage of older adult women with an intact cervix who had a Pap test within the past 3 years : age");
    return;
}

function draw15() {
    updateBarChart(Percentage_of_at_risk_adults_have_diabetes_asthma_cardiovascular_disease_or_currently_smoke_who_ever_had_a_pneumococcal_vaccine_race, "Percentage of at risk adults (have diabetes, asthma, cardiovascular disease or currently smoke) who ever had a pneumococcal vaccine : race");
    return;
}

function draw16() {
    updateBarChart(Percentage_of_older_adults_who_had_either_a_home_blood_stool_test_within_the_past_year_or_a_sigmoidoscopy_or_colonoscopy_within_the_past_10_years_race, "Percentage of older adults who had either a home blood stool test within the past year or a sigmoidoscopy or colonoscopy within the past 10 years : race");
    return;
}

function draw17() {
    updateBarChart(Percentage_of_older_adults_who_have_smoked_at_least_100_cigarettes_in_their_entire_life_and_still_smoke_every_day_or_some_days_race, "Percentage of older adults who have smoked at least 100 cigarettes in their entire life and still smoke every day or some days : race");
    return;
}

function draw18() {
    updateBarChart(Percentage_of_older_adults_who_reported_binge_drinking_within_the_past_30_days_race, "Percentage of older adults who reported binge drinking within the past 30 days : race");
    return;
}

function draw19() {
    updateBarChart(Percentage_of_older_adults_who_have_smoked_at_least_100_cigarettes_in_their_entire_life_and_still_smoke_every_day_or_some_days_age, "Percentage of older adults who have smoked at least 100 cigarettes in their entire life and still smoke every day or some days : age");
    return;
}

function draw20() {
    updateBarChart(Percentage_of_older_adults_who_reported_binge_drinking_within_the_past_30_days_age, "Percentage of older adults who reported binge drinking within the past 30 days : age");
    return;
}

function draw21() {
    updateBarChart(Percentage_of_older_adults_with_subjective_cognitive_decline_or_memory_loss_who_reported_talking_with_a_health_care_professional_about_it_race, "Percentage of older adults with subjective cognitive decline or memory loss who reported talking with a health care professional about it : race");
    return;
}

function draw22() {
    updateBarChart(Percentage_of_older_adults_who_reported_subjective_cognitive_decline_or_memory_loss_that_interferes_with_their_ability_to_engage_in_social_activities_or_household_chores_race, "Percentage of older adults who reported subjective cognitive decline or memory loss that interferes with their ability to engage in social activities or household chores : race");
    return;
}

function draw23() {
    updateBarChart(Percentage_of_older_adults_who_reported_subjective_cognitive_decline_or_memory_loss_that_interferes_with_their_ability_to_engage_in_social_activities_or_household_chores_age, "Percentage of older adults who reported subjective cognitive decline or memory loss that interferes with their ability to engage in social activities or household chores : age");
    return;
}

function draw24() {
    updateBarChart(Percentage_of_older_adults_with_subjective_cognitive_decline_or_memory_loss_who_reported_talking_with_a_health_care_professional_about_it_age, "Percentage of older adults with subjective cognitive decline or memory loss who reported talking with a health care professional about it : age");
    return;
}


// parallel plot
const plotPanel = document.getElementById("plotPanel");
const openOverlayBtn = document.getElementById("openOverlayBtn");
const closeOverlayBtn = document.getElementById("closeOverlayBtn");

openOverlayBtn.addEventListener("click", () => {
    plotPanel.classList.add("open");
});

closeOverlayBtn.addEventListener("click", () => {
    plotPanel.classList.remove("open");
});


function initParallelPlot() {
    const svg = d3.select("#parallelPlot");
    /*const width = +svg.attr("width");
    const height = +svg.attr("height");*/
    const width = 600;
    const height = 400;


    const features = [
        { name: "age", values: ["50-64", "65+"] },
        { name: "race", values: ["ASN", "BLK", "HIS", "NAA", "WHT"] },
        { name: "gender", values: ["FEMALE", "MALE"] },
        { name: "geolocation", values: ["Urban", "Rural"] }
    ];

    /*const lookupTable = {
      "Low|Red|1": "Class X",
      "High|Green|3": "Class Y"
    };*/

    function generateLookupTableFromDisparityJSON(data) {
        const ageGroups = Object.keys(data.age);
        const raceGroups = Object.keys(data.race);
        const genderGroups = Object.keys(data.gender);
        const geoGroups = Object.keys(data.geolocation);

        const lookupTable = {};

        for (const age of ageGroups) {
            for (const race of raceGroups) {
                for (const gender of genderGroups) {
                    for (const geo of geoGroups) {
                        const avg = (
                            data.age[age] +
                            data.race[race] +
                            data.gender[gender] +
                            data.geolocation[geo]
                        ) / 4;

                        const key = `${age}|${race}|${gender}|${geo}`;
                        lookupTable[key] = avg.toFixed(2);
                    }
                }
            }
        }

        return lookupTable;
    }

    let currentCategory = document.getElementById("categorySelect").value;
    let disparityData = disparityScoreMap[currentCategory];
    let lookupTable = generateLookupTableFromDisparityJSON(disparityData);

    //const lookupTable = generateLookupTableFromDisparityJSON(disparityData);


    Object.entries(lookupTable).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });







    const margin = { top: 40, bottom: 40 };
    const axisSpacing = width / (features.length + 1);
    const yScales = features.map(f =>
        d3.scalePoint()
            .domain(f.values)
            .range([margin.top, height - margin.bottom])
            .padding(0.5)
    );

    const selectedValues = Array(features.length).fill(null);

    svg.selectAll(".axis")
        .data(features)
        .enter()
        .append("g")
        .attr("class", "axis")
        .attr("transform", (_, i) => `translate(${axisSpacing * (i + 1)}, 0)`)
        .each(function (feature, i) {
            const axis = d3.axisLeft(yScales[i]).tickSize(0).tickPadding(10);
            d3.select(this).call(axis);

            d3.select(this).selectAll(".tick text")
                .style("fill", "black")
                .style("cursor", "pointer")
                .on("click", function (event, d) {
                    selectedValues[i] = d;
                    updateLine();
                });
        });

    const linePath = svg.append("path")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 2);

    const label = svg.append("text")
        .attr("x", width / 2)
        .attr("y", 30)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .style("fill", "white")
        .style("visibility", "hidden");


    const keyMap = {
        "50-64": "5064",
        "65+": "65PLUS"
    };

    function updateLine() {
        const points = selectedValues.map((val, i) =>
            val ? [axisSpacing * (i + 1), yScales[i](val)] : null
        );

        if (points.some(p => p === null)) {
            linePath.attr("d", null);
            label.style("visibility", "hidden");
            return;
        }

        linePath.attr("d", d3.line()(points));
        //const key = selectedValues.join("|");
        const resolved = selectedValues.map(v => keyMap[v] || v);
        const key = resolved.join("|");
        //label.text(lookupTable[key] || "No match").style("visibility", "visible");
        const score = lookupTable[key];
        if (score) {
            label.text(`Average health score of your group: ${score}`).style("visibility", "visible").style("fill", "white");
        } else {
            label.text("No match").style("visibility", "visible").style("fill", "white");
        }
    }

    document.getElementById("categorySelect").addEventListener("change", () => {
        const currentCategory = document.getElementById("categorySelect").value;
        const disparityData = disparityScoreMap[currentCategory];
        lookupTable = generateLookupTableFromDisparityJSON(disparityData);
        updateLine(); // safe to call — it's in scope globally now
    });
}


