


conn = pymysql.connect(host=HOST,
                       port=PORT,
                       user=USER,
                       passwd=PASSWORD,
                       db=DBNAME,
                       cursorclass=pymysql.cursors.DictCursor)
cursor = conn.cursor()






# cursor.execute("select * from hosts")
# https://www.notion.so/DBMS-Final-Queries-cb43eba6174f42269de6efa32a92b191

# variable escaping: https://stackoverflow.com/questions/49785731/input-value-formation-with-double-quotation-marks-and-single-quotes
# 好像完全可以吃生sql query欸好強

# for query in QueryMap:
#     if query.startswith('_'):
#         continue
#     print(f"=========={query}============")
#     print(QueryMap[query])
#     cursor.execute(*QueryMap[query])
#     rows = cursor.fetchall()
#     pprint(rows)
# query = 'SELECT id,sing_name,bir_yr FROM singers_list WHERE bir_yr = %s'
# curs.execute(query, (year, ))

# 1b4370c7-f5b5-4ba6-adbf-564ea8d0e92f SELECT D.Dname FROM Department as D

# # 提交，不然無法保存新建或者修改的數據
# conn.commit()
# # 關閉遊標
# cursor.close()
# # 關閉連接
# conn.close()
