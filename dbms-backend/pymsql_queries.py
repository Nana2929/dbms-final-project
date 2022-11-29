import pymysql
import dotenv
from typing import Dict
from pprint import pprint

env_file_path = './db.env'
env: Dict[str, str] = dotenv.dotenv_values(env_file_path)
print(env)
HOST: str = env.get('HOST')
PORT: int = int(env.get('PORT'))
USER: str = env.get('USER')
PASSWORD: str = env.get('PASSWORD')
DBNAME: str = env.get('DBNAME')


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
QueryMap = {
    'SELECT': ("SELECT * FROM Department  WHERE Dname = %s", ('NCKU CSIE', )),
    '_DELETE' :("DELETE From Course as C, CourseTaking as CT Where CT.SSN == %s and CT.Cno = C.Cno", ('b09104038', )) ,
    '_INSERT': ("INSERT INTO CourseTaking (Cno, SSN) VALUES (10, %s); ", ('P76114511', )),
    '_UPDATE':('UPDATE Student SET Name = %s WHERE SSN = %s', ('Ching Wen Yang', 'P76114511')),
    'IN': ("SELECT P.name FROM Professor as P WHERE P.Specialty IN (%s, %s, %s)",
           ('Biology Statistics, Survival Analysis', 'Digital', 'Natural Language Processing, Data Mining, Information Retrieval')),
    'NOT IN': ("SELECT D.Dname FROM Department as D WHERE D.Dno NOT IN (SELECT Dnumber from Classroom as C)", ()),
    'EXISTS': ("SELECT DISTINCT S.Name FROM Student as S WHERE EXISTS (SELECT O.SSN FROM Oral_Defense as O WHERE O.SSN = S.SSN);", ()),
    'NOT EXISTS': ("SELECT P.PSSN, P.Name FROM Professor as P WHERE NOT EXISTS ( SELECT DISTINCT S.AdvisorSSN FROM Student as S WHERE S.AdvisorSSN = P.PSSN);", ()),
    'COUNT': ("SELECT COUNT(C.HasAirConditioner) FROM Classroom as C WHERE C.HasAirConditioner = 1;", ()),
    'SUM':('SELECT SUM(C.Capacity) FROM Classroom as C, Department as D WHERE C.Dnumber = D.Dno AND D.Dname = \'NTU EE\';', ()),
    'MAX':("SELECT MAX(C.Capacity) FROM Classroom as C, Department as D WHERE C.Dnumber = D.Dno AND D.Dname = \'NTU DFLL\';", ()),
    'MIN':("SELECT MIN(C.Capacity) FROM Classroom as C, Department as D WHERE C.Dnumber = D.Dno AND D.Dname = \'NCKU CSIE\';", ()),
    'AVG':("SELECT AVG(C.Capacity) FROM Classroom as C; ", ()),
    'HAVING':("SELECT D.Dname, COUNT(*) FROM Department as D, Classroom as C WHERE D.Dno = C.Dnumber GROUP BY C.Dnumber HAVING COUNT(*) >= 2;", ())}
for query in QueryMap:
    if query.startswith('_'):
        continue
    print(f"=========={query}============")
    print(QueryMap[query])
    cursor.execute(*QueryMap[query])
    rows = cursor.fetchall()
    pprint(rows)
# query = 'SELECT id,sing_name,bir_yr FROM singers_list WHERE bir_yr = %s'
# curs.execute(query, (year, ))

# 1b4370c7-f5b5-4ba6-adbf-564ea8d0e92f SELECT D.Dname FROM Department as D

# # 提交，不然無法保存新建或者修改的數據
# conn.commit()
# # 關閉遊標
# cursor.close()
# # 關閉連接
# conn.close()
