// Initializing the rehearsal objects
var rehearsals = [	/*{rehearsal_start_time: new Date(2019, 1, 18, 8, 0, 0, 0), 
					rehearsal_finish_time: new Date(2019, 1, 18, 10, 0, 0, 0), 
					people_required:[	{name:"Bob", time:"8:30pm-9:30pm"}, 
										{name:"Anne", time:"8:30pm-10:30pm"}]
					},*/
					{rehearsal_start_time: new Date(2018, 11, 1, 10, 0, 0, 0), 
					rehearsal_finish_time: new Date(2018, 11, 1, 12, 0, 0, 0), 
					people_required:[	{name:"Audition Session 1 (Saturday Morning)", time:"10:00am-12:00pm"}]
					},
					{rehearsal_start_time: new Date(2018, 11, 1, 13, 30, 0, 0), 
					rehearsal_finish_time: new Date(2018, 11, 1, 15, 30, 0, 0), 
					people_required:[	{name:"Audition Session 2 (Saturday Afternoon)", time:"1:30pm-3:30pm"}]
					},
					{rehearsal_start_time: new Date(2018, 11, 2, 10, 0, 0, 0), 
					rehearsal_finish_time: new Date(2018, 11, 2, 12, 0, 0, 0), 
					people_required:[	{name:"Audition Session 3 (Sunday Morning)", time:"10:00am-12:00pm"}]
					},
					{rehearsal_start_time: new Date(2018, 11, 2, 13, 30, 0, 0), 
					rehearsal_finish_time: new Date(2018, 11, 2, 15, 30, 0, 0), 
					people_required:[	{name:"Audition Session 4 (Sunday Afternoon)", time:"1:30pm-3:30pm"}]
					},
					{rehearsal_start_time: new Date(2018, 11, 9, 17, 00, 0, 0), 
					rehearsal_finish_time: new Date(2018, 11, 9, 18, 00, 0, 0), 
					people_required:[	{name:"All Cast and Parents", time:"5:00pm-6:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 0, 27, 16, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 0, 27, 18, 00, 0, 0), 
					people_required:[	{name:"All Cast", time:"4:00pm-6:00pm"}]
					}];


					
$(document).ready(function() {
	// Find the id of the first rehearsal that has not been happened yet.
	var date_suffix = "";
	var now = new Date();
	var html = "";
	for (var i = 0; i < rehearsals.length; i++) {
		if (now < rehearsals[i].rehearsal_start_time) {
			var header = "";
			// Fixing suffixes
			if (["1", "21", "31"].includes($.datepicker.formatDate("d", rehearsals[i].rehearsal_start_time))) {
				date_suffix = "st";
			} else if (["2", "22"].includes($.datepicker.formatDate("d", rehearsals[i].rehearsal_start_time))) {
				date_suffix = "nd";
			} else {
				date_suffix = "th";
			}
			
			// Fixing up time
			// URGH javascript :'(
			if (rehearsals[i].rehearsal_start_time.getMinutes() == 0) {
				var min_start = "00";
			} else {
				var min_start = rehearsals[i].rehearsal_start_time.getMinutes();
			}
			if (rehearsals[i].rehearsal_start_time.getHours() > 12) {
				var hr_start = rehearsals[i].rehearsal_start_time.getHours() - 12;
				var start_suffix = "pm";
			} else if (rehearsals[i].rehearsal_start_time.getHours() == 12){
				var hr_start = rehearsals[i].rehearsal_start_time.getHours();
				var start_suffix = "pm";
			} else {
				var hr_start = rehearsals[i].rehearsal_start_time.getHours();
				var start_suffix = "am";
			}
			
			if (rehearsals[i].rehearsal_finish_time.getMinutes() == 0) {
				var min_end = "00";
			} else {
				var min_end = rehearsals[i].rehearsal_finish_time.getMinutes();
			}
			if (rehearsals[i].rehearsal_finish_time.getHours() > 12) {
				var hr_end = rehearsals[i].rehearsal_finish_time.getHours() - 12;
				var end_suffix = "pm";
			} else if (rehearsals[i].rehearsal_finish_time.getHours() == 12){
				var hr_end = rehearsals[i].rehearsal_finish_time.getHours();
				var end_suffix = "pm";
			} else {
				var hr_end = rehearsals[i].rehearsal_finish_time.getHours();
				var end_suffix = "am";
			}
			var time  = hr_start+":"+min_start+start_suffix+"&#8209;"+hr_end+":"+min_end+end_suffix; 
			
			
			header = header + $.datepicker.formatDate("DD&nbsp;d", rehearsals[i].rehearsal_start_time) + date_suffix + $.datepicker.formatDate("&nbsp;MM ", rehearsals[i].rehearsal_start_time) + time;
			
			html += '<div class="card border-secondary bg-white mb-3">\
			<h5 class="card-header card-title text-center">' + header + '</h5>\
			<div class="card-body">\
			<h5>People Required:</h5>\
			<table class="table table-hover">\
				<tbody>'
			
			for (var j = 0; j < rehearsals[i].people_required.length; j++) {
				html += '<tr>\
					  <td>'+rehearsals[i].people_required[j].name+'</td>\
					  <td class="text-right">' + rehearsals[i].people_required[j].time + '</td>\
					</tr>';
			}
					

			html += '\
				</tbody>\
				</table>\
				</div>\
				</div>';
		}
	}
	
	$("#rehearsal_boxes").html(html);
});