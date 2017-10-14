$( document ).ready(function() {

$('.summaryAlerts:contains("Emergency Alert")').parents(".eab-alert-header").find(".alternateAlerts").hide();

    $('.summaryAlerts:contains("System Outage")').parents(".eab-alert-header").find(".alternateAlerts").hide();

    $('.summaryAlerts:contains("Agency Closure")').parents(".eab-alert-header").find(".alternateAlerts").hide();
});