import csv

with open(r'C:\Users\duslg\Desktop\2020_US_County_Level_Presidential_Results.csv', mode='r') as csv_file:
    state_name_set = set()
    csv_reader = csv.reader(csv_file, delimiter=",")
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            state_name_set.add(row[0])
            line_count += 1

    print(state_name_set)
    print(len(state_name_set))



rows, cols = (51, 6)
arr = [[0 for i in range(cols)] for j in range(rows)]

for id, state_name in enumerate(state_name_set):
    arr[id][0] = state_name
    print(id, state_name)
    line_count = 0
    votes_gop = 0
    votes_dem = 0
    total_votes = 0

    with open(r'C:\Users\duslg\Desktop\2020_US_County_Level_Presidential_Results.csv', mode='r') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")
        for row in csv_reader:
            # print(row['state_name'])
            if line_count != 0 and row[0] == state_name: # I don't want the first row
                if row[3].isspace():
                    votes_gop += 0
                else:
                    votes_gop += int(row[3])

                if row[4].isspace():
                    votes_dem += 0
                else:
                    votes_dem += int(row[4])

                if row[5].isspace():
                    total_votes += 0
                else:
                    total_votes += int(row[5])

            line_count += 1
        print('For {}, votes_gop is {}, votes_dem is {}, and total_votes is {}'.format(state_name, votes_gop, votes_dem, total_votes))
        arr[id][1] = votes_gop
        arr[id][2] = votes_dem
        arr[id][3] = total_votes
        arr[id][4] = votes_gop / total_votes
        arr[id][5] = votes_dem / total_votes

print(arr)




with open(r'C:\Users\duslg\Desktop\StateLevelData.csv', 'w', newline='') as csv_file:
    csvwriter = csv.writer(csv_file)
    csvwriter.writerow(['state_name', 'votes_gop', 'votes_dem', 'total_votes', 'per_gop', 'per_dem'])
    csvwriter.writerows(arr)


