import csv
import json

votingDataList = []

with open(r'W:\my-app\src\data\01-23-2021.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file, delimiter=",")
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            print(f'Column names are {", ".join(row)}')
            votingDataList.append(row)
            line_count += 1
        else:
            # print(row)
            votingDataList.append(row)
            line_count += 1

print(votingDataList)
print('\n')

with open(r'W:\my-app\src\data\us-income-election.geojson.json', mode="r") as read_it:
    data = json.load(read_it)
    for feature in data['features']:
        for votingDataPerState in votingDataList:
            if feature['properties']['name'] == votingDataPerState['Province_State']:
                feature['properties']['incident_rate'] = float(votingDataPerState['Incident_Rate'])
                feature['properties']['testing_rate'] = float(votingDataPerState['Testing_Rate'])
                feature['properties']['per_gop'] = float(feature['properties']['per_gop'])
                feature['properties']['per_dem'] = float(feature['properties']['per_dem'])
                print(feature)
    with open(r'W:\my-app\src\data\us-income-election.geojson.json', "w") as p:
        json.dump(data, p)

    # dict = {'key1':'geeks', 'key2':'fill_me'}
# print("Current Dict is: ", dict)
#
# # using the subscript notation
# # Dictionary_Name[New_Key_Name] = New_Key_Value
# dict['key2'] = 'for'
# dict['key3'] = 'geeks'
# print("Updated Dict is: ", dict)

