// Initializing the rehearsal objects
var rehearsals = [	/*{rehearsal_start_time: new Date(2019, 1, 18, 8, 0, 0, 0), 
					rehearsal_finish_time: new Date(2019, 1, 18, 10, 0, 0, 0), 
					people_required:[	{name:"Bob", time:"8:30pm-9:30pm"}, 
										{name:"Anne", time:"8:30pm-10:30pm"}]
					},*/
					{rehearsal_start_time: new Date(2018, 11, 1, 10, 0, 0, 0), 
					rehearsal_finish_time: new Date(2018, 11, 1, 12, 0, 0, 0), 
					people_required:[	{name:"Audition Session 1 (Saturday Morning)", time:"10:00am&#8209;12:00pm"}]
					},
					{rehearsal_start_time: new Date(2018, 11, 1, 13, 30, 0, 0), 
					rehearsal_finish_time: new Date(2018, 11, 1, 15, 30, 0, 0), 
					people_required:[	{name:"Audition Session 2 (Saturday Afternoon)", time:"1:30pm&#8209;3:30pm"}]
					},
					{rehearsal_start_time: new Date(2018, 11, 2, 10, 0, 0, 0), 
					rehearsal_finish_time: new Date(2018, 11, 2, 12, 0, 0, 0), 
					people_required:[	{name:"Audition Session 3 (Sunday Morning)", time:"10:00am&#8209;12:00pm"}]
					},
					{rehearsal_start_time: new Date(2018, 11, 2, 13, 30, 0, 0), 
					rehearsal_finish_time: new Date(2018, 11, 2, 15, 30, 0, 0), 
					people_required:[	{name:"Audition Session 4 (Sunday Afternoon)", time:"1:30pm&#8209;3:30pm"}]
					},
					{rehearsal_start_time: new Date(2018, 11, 9, 17, 00, 0, 0), 
					rehearsal_finish_time: new Date(2018, 11, 9, 18, 00, 0, 0), 
					people_required:[	{name:"All Cast and Parents", time:"5:00pm&#8209;6:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 0, 27, 16, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 0, 27, 18, 00, 0, 0), 
					people_required:[	{name:"All Cast", time:"4:00pm&#8209;6:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 0, 30, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 0, 30, 20, 00, 0, 0), 
					people_required:[	{name:"Lara Chiswell", time:"6:00pm&#8209;8:00pm"},
										{name:"Tania McMillan", time:"6:00pm&#8209;8:00pm"},
										{name:"Katriel Thomas", time:"6:00pm&#8209;8:00pm"},
										{name:"Sophie Moore", time:"6:00pm&#8209;8:00pm"},
										{name:"Emma Moore", time:"6:00pm&#8209;8:00pm"},
										{name:"Zara Townsend", time:"6:00pm&#8209;8:00pm"},
										{name:"Margo Pattie", time:"6:00pm&#8209;8:00pm"},
										{name:"Erika Forbes", time:"6:00pm&#8209;8:00pm"},
										{name:"Caitlin Wall", time:"6:00pm&#8209;8:00pm"},
										{name:"Sam Righton", time:"6:00pm&#8209;8:00pm"},
										{name:"Isabella Randall", time:"6:00pm&#8209;8:00pm"},
										{name:"Alex Pethig", time:"6:00pm&#8209;8:00pm"},
										{name:"Amelia Martin", time:"6:00pm&#8209;8:00pm"},
										{name:"Annwesha Saikia", time:"6:00pm&#8209;8:00pm"},
										{name:"Thomas Soper", time:"6:00pm&#8209;8:00pm"},
										{name:"Gibson Ross", time:"6:00pm&#8209;8:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 0, 31, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 0, 31, 20, 00, 0, 0), 
					people_required:[	{name:"All Cast <strong>EXCEPT<strong>", time:"6:00pm&#8209;8:00pm"},
										{name:"Lara Chiswell", time:"Not Required"},
										{name:"Oscar Stove", time:"Not Required"},
										{name:"Gabby Jones", time:"Not Required"},
										{name:"Elli Thompson", time:"Not Required"},
										{name:"Sophie Clayton", time:"Not Required"},
										{name:"Anna Roberts", time:"Not Required"},
										{name:"Lily Partridge", time:"Not Required"},
										{name:"Tegan Mathewson", time:"Not Required"},
										{name:"Amira Birse", time:"Not Required"},
										{name:"Xanthe Moore", time:"Not Required"},
										{name:"Reuben Mannering", time:"Not Required"},
										{name:"Hamish Taylor", time:"Not Required"},
										{name:"Amelie Dunn", time:"Not Required"}]
					},
					{rehearsal_start_time: new Date(2019, 1, 3, 16, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 1, 3, 18, 00, 0, 0), 
					people_required:[	{name:"All Cast", time:"4:00pm&#8209;6:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 1, 6, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 1, 6, 20, 00, 0, 0), 
					people_required:[	{name:"Brock Cottrel", time:"6:00pm&#8209;8:00pm"},
										{name:"Lara Chiswell", time:"6:00pm&#8209;8:00pm"},
										{name:"Ella Partridge", time:"6:00pm&#8209;8:00pm"},
										{name:"Tania McMillan", time:"6:00pm&#8209;8:00pm"},
										{name:"Katriel Thomas", time:"6:00pm&#8209;8:00pm"},
										{name:"George Long", time:"6:00pm&#8209;8:00pm"},
										{name:"Sophie Moore", time:"6:00pm&#8209;8:00pm"},
										{name:"Olivia Skelton", time:"6:00pm&#8209;8:00pm"},
										{name:"Emma Moore", time:"6:00pm&#8209;8:00pm"},
										{name:"Isabelle Fuller", time:"6:00pm&#8209;8:00pm"},
										{name:"Lydia Hawes", time:"6:00pm&#8209;8:00pm"},
										{name:"Charli Gilbertson", time:"6:00pm&#8209;8:00pm"},
										{name:"Samantha Lewell", time:"6:00pm&#8209;8:00pm"},
										{name:"Maddy Winfield", time:"6:00pm&#8209;8:00pm"},
										{name:"Zoe Alston", time:"6:00pm&#8209;8:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 1, 7, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 1, 7, 20, 00, 0, 0), 
					people_required:[	{name:"All Cast <strong>EXCEPT<strong>", time:"6:00pm&#8209;8:00pm"},
										{name:"Lara Chiswell", time:"Not Required"},
										{name:"Liam Morris", time:"Not Required"},
										{name:"Oscar Stove", time:"Not Required"},
										{name:"Tania McMillan", time:"Not Required"},
										{name:"Katriel Thomas", time:"Not Required"},
										{name:"Olivia Skelton", time:"Not Required"},
										{name:"Tegan Mathewson", time:"Not Required"},
										{name:"Amira Birse", time:"Not Required"},
										{name:"Xanthe Moore", time:"Not Required"}]
					},
					{rehearsal_start_time: new Date(2019, 1, 10, 16, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 1, 10, 18, 00, 0, 0), 
					people_required:[	{name:"Brock Cottrel", time:"4:00pm&#8209;6:00pm"},
										{name:"Liam Morris", time:"4:00pm&#8209;6:00pm"},
										{name:"Gabby Jones", time:"4:00pm&#8209;6:00pm"},
										{name:"Reuben Mannering", time:"4:00pm&#8209;6:00pm"},
										{name:"Hamish Taylor", time:"4:00pm&#8209;6:00pm"},
										{name:"Amelie Dunn", time:"4:00pm&#8209;6:00pm"},
										{name:"Oscar Stove", time:"4:00pm&#8209;6:00pm"},
										{name:"Olivia Skelton", time:"4:00pm&#8209;6:00pm"},
										{name:"Lara Chiswell", time:"4:00pm&#8209;6:00pm"},
										{name:"Ella Partridge", time:"4:00pm&#8209;6:00pm"},
										{name:"Tania McMillan", time:"4:00pm&#8209;6:00pm"},
										{name:"Katriel Thomas", time:"4:00pm&#8209;6:00pm"},
										{name:"George Long", time:"4:00pm&#8209;6:00pm"},
										{name:"Sophie Moore", time:"4:00pm&#8209;6:00pm"},
										{name:"Emma Moore", time:"4:00pm&#8209;6:00pm"},
										{name:"Elli Thompson", time:"4:00pm&#8209;6:00pm"},
										{name:"Sophie Clayton", time:"4:00pm&#8209;6:00pm"},
										{name:"Anna Roberts", time:"4:00pm&#8209;6:00pm"},
										{name:"Lily Partridge", time:"4:00pm&#8209;6:00pm"},
										{name:"Tegan Mathewson", time:"4:00pm&#8209;6:00pm"},
										{name:"Amira Birse", time:"4:00pm&#8209;6:00pm"},
										{name:"Xanthe Moore", time:"4:00pm&#8209;6:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 1, 13, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 1, 13, 20, 00, 0, 0), 
					people_required:[	{name:"George Long", time:"6:00pm&#8209;8:00pm"},
										{name:"Sophie Moore", time:"6:00pm&#8209;8:00pm"},
										{name:"Elli Thompson", time:"6:00pm&#8209;8:00pm"},
										{name:"Sophie Clayton", time:"6:00pm&#8209;8:00pm"},
										{name:"Anna Roberts", time:"6:00pm&#8209;8:00pm"},
										{name:"Lily Partridge", time:"6:00pm&#8209;8:00pm"},
										{name:"Tegan Mathewson", time:"6:00pm&#8209;8:00pm"},
										{name:"Amira Birse", time:"6:00pm&#8209;8:00pm"},
										{name:"Xanthe Moore", time:"6:00pm&#8209;8:00pm"},
										{name:"Oscar Stove", time:"6:00pm&#8209;8:00pm"},
										{name:"Gabby Jones", time:"6:00pm&#8209;8:00pm"},
										{name:"Lara Chiswell", time:"6:00pm&#8209;8:00pm"},
										{name:"Katriel Thomas", time:"6:00pm&#8209;8:00pm"},
										{name:"Tania McMillan", time:"6:00pm&#8209;8:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 1, 14, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 1, 14, 20, 00, 0, 0), 
					people_required:[	{name:"Lara Chiswell", time:"6:00pm&#8209;7:00pm"},
										{name:"Katriel Thomas", time:"6:00pm&#8209;8:00pm"},
										{name:"Tania McMillan", time:"6:00pm&#8209;8:00pm"},
										{name:"Brock Cottrel", time:"6:00pm&#8209;7:00pm"},
										{name:"Liam Morris", time:"6:00pm&#8209;8:00pm"},
										{name:"Isabelle Fuller", time:"6:00pm&#8209;7:00pm"},
										{name:"Lydia Hawes", time:"6:00pm&#8209;7:00pm"},
										{name:"Charli Gilbertson", time:"6:00pm&#8209;7:00pm"},
										{name:"Samantha Lewell", time:"6:00pm&#8209;7:00pm"},
										{name:"Maddy Winfield", time:"6:00pm&#8209;7:00pm"},
										{name:"Zoe Alston", time:"6:00pm&#8209;7:00pm"},
										{name:"Ella Partridge", time:"7:00pm&#8209;8:00pm"},
										{name:"Sophie Moore", time:"7:00pm&#8209;8:00pm"},
										{name:"Olivia Skelton", time:"7:00pm&#8209;8:00pm"},
										{name:"Emma Moore", time:"7:00pm&#8209;8:00pm"},
										{name:"Tegan Mathewson", time:"7:00pm&#8209;8:00pm"},
										{name:"Amira Birse", time:"7:00pm&#8209;8:00pm"},
										{name:"Xanthe Moore", time:"7:00pm&#8209;8:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 1, 17, 16, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 1, 17, 18, 00, 0, 0), 
					people_required:[	{name:"Liam Morris", time:"4:00pm&#8209;6:00pm"},
										{name:"Ella Partridge", time:"4:00pm&#8209;6:00pm"},
										{name:"Elli Thompson", time:"4:00pm&#8209;6:00pm"},
										{name:"Sophie Clayton", time:"4:00pm&#8209;6:00pm"},
										{name:"Anna Roberts", time:"4:00pm&#8209;6:00pm"},
										{name:"Lily Partridge", time:"4:00pm&#8209;6:00pm"},
										{name:"Brock Cottrel", time:"4:00pm&#8209;6:00pm"},
										{name:"Albie Moore", time:"4:00pm&#8209;6:00pm"},
										{name:"Isabelle Fuller", time:"4:00pm&#8209;6:00pm"},
										{name:"Lydia Hawes", time:"4:00pm&#8209;6:00pm"},
										{name:"Charli Gilbertson", time:"4:00pm&#8209;6:00pm"},
										{name:"Samantha Lewell", time:"4:00pm&#8209;6:00pm"},
										{name:"Maddy Winfield", time:"4:00pm&#8209;6:00pm"},
										{name:"Zoe Alston", time:"4:00pm&#8209;6:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 1, 20, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 1, 20, 20, 00, 0, 0), 
					people_required:[	{name:"All Cast", time:"6:00pm&#8209;8:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 1, 21, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 1, 21, 20, 00, 0, 0), 
					people_required:[	{name:"All Cast", time:"6:00pm&#8209;8:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 1, 24, 14, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 1, 24, 18, 00, 0, 0), 
					people_required:[	{name:"All Cast", time:"2:00pm&#8209;6:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 1, 27, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 1, 27, 20, 00, 0, 0), 
					people_required:[	{name:"Brock Cottrel", time:"6:00pm&#8209;8:00pm"},
										{name:"Lara Chiswell", time:"6:00pm&#8209;8:00pm"},
										{name:"Liam Morris", time:"6:00pm&#8209;8:00pm"},
										{name:"Ella Partridge", time:"6:00pm&#8209;7:00pm"},
										{name:"Tegan Mathewson", time:"7:00pm&#8209;8:00pm"},
										{name:"Amira Birse", time:"7:00pm&#8209;8:00pm"},
										{name:"Xanthe Moore", time:"7:00pm&#8209;8:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 1, 28, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 1, 28, 20, 00, 0, 0), 
					people_required:[	{name:"Brock Cottrel", time:"6:00pm&#8209;8:00pm"},
										{name:"Lara Chiswell", time:"6:00pm&#8209;8:00pm"},
										{name:"Liam Morris", time:"6:00pm&#8209;8:00pm"},
										{name:"Tania McMillan", time:"6:00pm&#8209;8:00pm"},
										{name:"Katriel Thomas", time:"6:00pm&#8209;8:00pm"},
										{name:"George Long", time:"6:00pm&#8209;8:00pm"},
										{name:"Sophie Moore", time:"6:00pm&#8209;8:00pm"},
										{name:"Albie Moore", time:"6:00pm&#8209;8:00pm"},
										{name:"Olivia Skelton", time:"6:00pm&#8209;8:00pm"},
										{name:"Emma Moore", time:"6:00pm&#8209;8:00pm"},
										{name:"Zara Townsend", time:"6:00pm&#8209;8:00pm"},
										{name:"Margo Pattie", time:"6:00pm&#8209;8:00pm"},
										{name:"Erika Forbes", time:"6:00pm&#8209;8:00pm"},
										{name:"Caitlin Wall", time:"6:00pm&#8209;8:00pm"},
										{name:"Sam Righton", time:"6:00pm&#8209;8:00pm"},
										{name:"Isabella Randall", time:"6:00pm&#8209;8:00pm"},
										{name:"Alex Pethig", time:"6:00pm&#8209;8:00pm"},
										{name:"Amelia Martin", time:"6:00pm&#8209;8:00pm"},
										{name:"Annwesha Saikia", time:"6:00pm&#8209;8:00pm"},
										{name:"Thomas Soper", time:"6:00pm&#8209;8:00pm"},
										{name:"Gibson Ross", time:"6:00pm&#8209;8:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 2, 3, 16, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 2, 3, 18, 00, 0, 0), 
					people_required:[	{name:"Lara Chiswell", time:"4:00pm&#8209;6:00pm"},
										{name:"Albie Moore", time:"4:00pm&#8209;6:00pm"},
										{name:"Olivia Skelton", time:"4:00pm&#8209;6:00pm"},
										{name:"Emma Moore", time:"4:00pm&#8209;6:00pm"},
										{name:"Gabby Jones", time:"4:00pm&#8209;6:00pm"},
										{name:"Zara Townsend", time:"4:00pm&#8209;6:00pm"},
										{name:"Margo Pattie", time:"4:00pm&#8209;6:00pm"},
										{name:"Erika Forbes", time:"4:00pm&#8209;6:00pm"},
										{name:"Caitlin Wall", time:"4:00pm&#8209;6:00pm"},
										{name:"Sam Righton", time:"4:00pm&#8209;6:00pm"},
										{name:"Isabella Randall", time:"4:00pm&#8209;6:00pm"},
										{name:"Alex Pethig", time:"4:00pm&#8209;6:00pm"},
										{name:"Amelia Martin", time:"4:00pm&#8209;6:00pm"},
										{name:"Elli Thompson", time:"4:00pm&#8209;6:00pm"},
										{name:"Sophie Clayton", time:"4:00pm&#8209;6:00pm"},
										{name:"Anna Roberts", time:"4:00pm&#8209;6:00pm"},
										{name:"Lily Partridge", time:"4:00pm&#8209;6:00pm"},
										{name:"Tegan Mathewson", time:"4:00pm&#8209;6:00pm"},
										{name:"Amira Birse", time:"4:00pm&#8209;6:00pm"},
										{name:"Xanthe Moore", time:"4:00pm&#8209;6:00pm"},
										{name:"Annwesha Saikia", time:"4:00pm&#8209;6:00pm"},
										{name:"Thomas Soper", time:"4:00pm&#8209;6:00pm"},
										{name:"Gibson Ross", time:"4:00pm&#8209;6:00pm"},
										{name:"Amelie Dunn", time:"4:00pm&#8209;6:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 2, 6, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 2, 6, 20, 00, 0, 0), 
					people_required:[	{name:"Brock Cottrel", time:"6:00pm&#8209;8:00pm"},
										{name:"Lara Chiswell", time:"6:00pm&#8209;8:00pm"},
										{name:"Liam Morris", time:"6:00pm&#8209;8:00pm"},
										{name:"Albie Moore", time:"6:00pm&#8209;8:00pm"},
										{name:"Olivia Skelton", time:"6:00pm&#8209;8:00pm"},
										{name:"Emma Moore", time:"6:00pm&#8209;8:00pm"},
										{name:"Zara Townsend", time:"6:00pm&#8209;8:00pm"},
										{name:"Margo Pattie", time:"6:00pm&#8209;8:00pm"},
										{name:"Erika Forbes", time:"6:00pm&#8209;8:00pm"},
										{name:"Caitlin Wall", time:"6:00pm&#8209;8:00pm"},
										{name:"Sam Righton", time:"6:00pm&#8209;8:00pm"},
										{name:"Isabella Randall", time:"6:00pm&#8209;8:00pm"},
										{name:"Alex Pethig", time:"6:00pm&#8209;8:00pm"},
										{name:"Amelia Martin", time:"6:00pm&#8209;8:00pm"},
										{name:"Annwesha Saikia", time:"6:00pm&#8209;8:00pm"},
										{name:"Thomas Soper", time:"6:00pm&#8209;8:00pm"},
										{name:"Gibson Ross", time:"6:00pm&#8209;8:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 2, 7, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 2, 7, 20, 00, 0, 0), 
					people_required:[	{name:"All Cast <strong>EXCEPT<strong>", time:"6:00pm&#8209;8:00pm"},
										{name:"Oscar Stove", time:"Not Required"}]
					},
					{rehearsal_start_time: new Date(2019, 2, 10, 16, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 2, 10, 18, 00, 0, 0), 
					people_required:[	{name:"All Cast", time:"4:00pm&#8209;6:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 2, 13, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 2, 13, 20, 00, 0, 0), 
					people_required:[	{name:"Brock Cottrel", time:"6:00pm&#8209;8:00pm"},
										{name:"Lara Chiswell", time:"6:00pm&#8209;8:00pm"},
										{name:"Liam Morris", time:"6:00pm&#8209;8:00pm"},
										{name:"Oscar Stove", time:"6:00pm&#8209;8:00pm"},
										{name:"Tania McMillan", time:"6:00pm&#8209;8:00pm"},
										{name:"Katriel Thomas", time:"6:00pm&#8209;8:00pm"},
										{name:"George Long", time:"6:00pm&#8209;8:00pm"},
										{name:"Sophie Moore", time:"6:00pm&#8209;8:00pm"},
										{name:"Albie Moore", time:"6:00pm&#8209;8:00pm"},
										{name:"Olivia Skelton", time:"6:00pm&#8209;8:00pm"},
										{name:"Emma Moore", time:"6:00pm&#8209;8:00pm"},
										{name:"Zara Townsend", time:"6:00pm&#8209;8:00pm"},
										{name:"Margo Pattie", time:"6:00pm&#8209;8:00pm"},
										{name:"Erika Forbes", time:"6:00pm&#8209;8:00pm"},
										{name:"Caitlin Wall", time:"6:00pm&#8209;8:00pm"},
										{name:"Sam Righton", time:"6:00pm&#8209;8:00pm"},
										{name:"Isabella Randall", time:"6:00pm&#8209;8:00pm"},
										{name:"Alex Pethig", time:"6:00pm&#8209;8:00pm"},
										{name:"Amelia Martin", time:"6:00pm&#8209;8:00pm"},
										{name:"Annwesha Saikia", time:"6:00pm&#8209;8:00pm"},
										{name:"Thomas Soper", time:"6:00pm&#8209;8:00pm"},
										{name:"Gibson Ross", time:"6:00pm&#8209;8:00pm"},
										{name:"Gabby Jones", time:"6:00pm&#8209;8:00pm"},
										{name:"Reuben Mannering", time:"6:00pm&#8209;8:00pm"},
										{name:"Hamish Taylor", time:"6:00pm&#8209;8:00pm"},
										{name:"Amelie Dunn", time:"6:00pm&#8209;8:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 2, 14, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 2, 14, 20, 00, 0, 0), 
					people_required:[	{name:"All Cast", time:"6:00pm&#8209;8:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 2, 20, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 2, 20, 20, 00, 0, 0), 
					people_required:[	{name:"All Cast", time:"6:00pm&#8209;8:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 2, 21, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 2, 21, 20, 00, 0, 0), 
					people_required:[	{name:"All Cast", time:"6:00pm&#8209;8:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 2, 24, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 2, 24, 20, 00, 0, 0), 
					people_required:[	{name:"All Cast", time:"2:00pm&#8209;6:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 2, 27, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 2, 27, 20, 00, 0, 0), 
					people_required:[	{name:"All Cast", time:"6:00pm&#8209;8:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 2, 28, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 2, 28, 20, 00, 0, 0), 
					people_required:[	{name:"All Cast", time:"6:00pm&#8209;8:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 2, 31, 14, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 2, 31, 18, 00, 0, 0), 
					people_required:[	{name:"All Cast", time:"2:00pm&#8209;6:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 3, 3, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 3, 3, 20, 00, 0, 0), 
					people_required:[	{name:"All Cast", time:"6:00pm&#8209;8:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 3, 4, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 3, 4, 20, 00, 0, 0), 
					people_required:[	{name:"All Cast", time:"6:00pm&#8209;8:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 3, 7, 14, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 3, 7, 18, 00, 0, 0), 
					people_required:[	{name:"All Cast", time:"2:00pm&#8209;6:00pm"}]
					},
					{rehearsal_start_time: new Date(2019, 3, 8, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 3, 8, 20, 30, 0, 0), 
					people_required:[	{name:"All Cast", time:"6:00pm&#8209;8:30pm"}]
					},
					{rehearsal_start_time: new Date(2019, 3, 9, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 3, 9, 20, 30, 0, 0), 
					people_required:[	{name:"All Cast", time:"6:00pm&#8209;8:30pm"}]
					},
					{rehearsal_start_time: new Date(2019, 3, 10, 18, 00, 0, 0), 
					rehearsal_finish_time: new Date(2019, 3, 10, 20, 30, 0, 0), 
					people_required:[	{name:"All Cast", time:"6:00pm&#8209;8:30pm"}]
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