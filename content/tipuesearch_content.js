var tipuesearch = {"pages": [{'title': 'About', 'text': 'w5 password_generator \n # 導入亂數模組\nimport random\n# 導入字串模組\nimport string\n# 利用 def 關鍵字定義函式\n# 函式的輸入變數可以設定初始值\ndef password_generator(size=4, chars=string.ascii_lowercase + string.digits):\n    # 函式內以多行註解說明函式功能\n    """Generate random password\n    """\n    # 利用 return 關鍵字將所產生的亂數字串傳回\n    return \'\'.join(random.choice(chars) for _ in range(size))\n# 建立一個變數與隨後的字串對應\npass_string = "abcdefghkmnpqrstuwxyz123456789"\n# 利用重複迴圈呼叫 password_generator() 函式 10 次\nfor i in range(10):\n    print(password_generator(4, pass_string)) \n cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'cp2022', 'text': 'w6_jj_hw 抽點與擷取個人靜態網站 \n \n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n', 'tags': '', 'url': 'cp2022.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w16_綠格子', 'text': 'rect_walk \n  納入 Brython 環境  \n \n \n  啟動 Brython  \n \n \n  給定 brython_div1 division 標註  \n \n  加入啟動按鈕後的 Rect 行走程式原始碼  \n', 'tags': '', 'url': 'w16_綠格子.html'}, {'title': 'w15_問題', 'text': '\xa01. 為何學習計算機程式需要建立個人倉儲? \xa0 \xa0 \xa0學會架設網站並修復、更新網站 \n \xa02. 全球資訊網能夠提供甚麼功能或有什麼優點? \xa0 \xa0 \xa0能夠在網路上進行互動和瀏覽器的主要工具，網頁主要是文字檔案格式化和超文件標示語言(HTML)。 \xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \xa03. Replit, stud.cycu.org 與 localhost 分別代表甚麼? \xa0 \xa0 \xa0Replit是提供線上集成開發環境服務的公司 \xa0 \xa0 \xa0stud.cycu.org是學校的網站或信箱 \xa0 \xa0 \xa0localhost是表示為「此計算機」的主機名 \xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \xa04. https, ssh 到底提供使用者那些功能或優點? \xa0 \xa0 \xa0https:使用網站時比HTTP更安全 \xa0 \xa0 \xa0ssh:電腦內已先設定好帳密,上傳時不需輸入帳密 \xa0\xa0\xa0\xa0\xa0 \xa0 \xa05. Brython 與 Python 有甚麼差別? \xa0 \xa0 \xa0Brython是一個用Python 3 撰寫的框架 \xa0\xa0 \xa0 \xa06. 能夠直接在瀏覽器中以 Brython 繪製中華民國國旗, 或模擬綠色方塊在方塊格點中任意移動, 代表甚麼? \xa0 \xa0 \xa0代表已經熟悉Brython的框架，能自己繪製想要編寫的程式 \xa0 \xa0 \xa07. 字串, 整數, 浮點數, 數列, Tuple, Dictionary, 函式, 重複迴圈, class, 物件導向, 資料庫, 這些名詞對您\xa0 \xa0 \xa0 \xa0而言代表甚麼? \xa0\xa0\xa0\xa0\xa0\xa0\xa0 A:python程式語言，學會這些能才能進行各種的編程 \n', 'tags': '', 'url': 'w15_問題.html'}, {'title': 'W14-1', 'text': 'ex1 \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\n#print(type(user_input_temp))\nprint(float(user_input_temp)*2) \n \n \n', 'tags': '', 'url': 'W14-1.html'}, {'title': 'w14-2_按鈕', 'text': '\n \n \n 取使用者輸入 \n \n \n \n', 'tags': '', 'url': 'w14-2_按鈕.html'}, {'title': 'W13', 'text': 'ex1 \n \'\'\'\nf = c*9/5 + 32\nc = (f-32)*5/9\n\'\'\'\nc = input("請輸入攝氏溫度值")\n#print(type(c))\nc = float(c)\nprint(c, c*9/5 + 32)  \n ex2 \n \'\'\'\nf = c*9/5 + 32\nc = (f-32)*5/9\n\'\'\'\nc = input("請輸入攝氏溫度值")\n#print(type(c))\nc = float(c)\nprint("你輸入的攝氏溫度: " + str(c), "等於攝氏溫度: " + str(c*9/5 +32)) \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W12_溫度換算', 'text': 'ex1 \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp)) \n ex2 \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp))\n# 到這裡已知利用 input() 函式將傳回字串, 接著以 float() 將字串轉為浮點數\nuser_input_temp = float(user_input_temp)\n# 因為攝氏溫度乘上 9/5 之後再加上 32 就可以得到對應的華氏溫度值\nFahrenheit = (user_input_temp*9/5) + 32\n# 到這裡, Fahrenheit 資料型別為浮點數, 而 user_input_temp 在第 8 行也轉為浮點數\n# 要將兩個浮點數與字串相加, 都必須透過 str() 轉為字串\nprint("攝氏 " + str(user_input_temp) + " 度, 等於華氏 " + str(Fahrenheit) + " 度.") \n', 'tags': '', 'url': 'W12_溫度換算.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};