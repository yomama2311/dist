const timelineData = [
  { date: "8-1975", title: "Hội nghị Trung ương 24 khóa III", detail: "Chủ trương đưa cả nước tiến nhanh, tiến mạnh, tiến vững chắc lên chủ nghĩa xã hội; miền Bắc tiếp tục đẩy mạnh xây dựng chủ nghĩa xã hội và hoàn thiện quan hệ sản xuất xã hội chủ nghĩa; miền Nam đồng thời tiến hành cải tạo xã hội chủ nghĩa và xây dựng chủ nghĩa xã hội; hoàn thành thống nhất nước nhà, chống âm mưu chia rẽ của các thế lực thù địch." },
  { date: "15–21/11/1975", title: "Hội nghị Hiệp thương chính trị", detail: "Hội nghị Hiệp thương chính trị hai đoàn đại biểu Bắc-Nam tại Sài Gòn: khẳng định nước Việt Nam, dân tộc Việt Nam là một; tổ chức Tổng tuyển cử trên toàn lãnh thổ bầu Quốc hội chung theo nguyên tắc dân chủ, phổ thông, bình đẳng, trực tiếp và bỏ phiếu kín." },
  { date: "25-4-1976", title: "Tổng tuyển cử bầu Quốc hội chung", detail: "Tổng tuyển cử bầu Quốc hội chung của nước Việt Nam thống nhất: hơn 23 triệu cử tri (đạt tỉ lệ 98,77%) bầu ra 492 đại biểu." },
  { date: "24-6 đến 3-7-1976", title: "Kỳ họp thứ nhất Quốc hội", detail: "Kỳ họp thứ nhất Quốc hội nước Việt Nam thống nhất tại Hà Nội: đặt tên nước Cộng hòa Xã hội chủ nghĩa Việt Nam, Thủ đô Hà Nội, đổi tên Thành phố Sài Gòn thành Thành phố Hồ Chí Minh; bầu Tôn Đức Thắng làm Chủ tịch nước, Trường Chinh làm Chủ tịch Ủy ban Thường vụ Quốc hội, Phạm Văn Đồng làm Thủ tướng Chính phủ." },
  { date: "Sau 7-1976", title: "Thống nhất các tổ chức chính trị - xã hội", detail: "Thống nhất các tổ chức chính trị-xã hội với tên gọi mới: Mặt trận Tổ quốc Việt Nam, Đoàn Thanh niên Lao động Hồ Chí Minh, Tổng Công đoàn Việt Nam, Hội Liên hiệp Phụ nữ Việt Nam." },
  { date: "14–20/12/1976", title: "Đại hội đại biểu toàn quốc lần thứ IV", detail: "Họp từ 14 đến 20-12-1976 tại Hà Nội. Tổng Bí thư: Lê Duẩn. Nội dung: sửa đổi Điều lệ Đảng, thông qua Kế hoạch Nhà nước 5 năm (1976-1980), quyết định đổi tên Đảng Lao động Việt Nam thành Đảng Cộng sản Việt Nam." },
  { date: "26-12-1978 → 7-1-1979", title: "Chiến tranh bảo vệ biên giới Tây Nam", detail: "Ngày 26-12-1978 Quân tình nguyện Việt Nam phối hợp và giúp đỡ Campuchia tổng tiến công, giải phóng Thủ đô Phnôm Pênh vào 7-1-1979, đánh đổ chế độ diệt chủng Pôn Pốt." },
  { date: "17-2-1979", title: "Chiến tranh bảo vệ biên giới phía Bắc", detail: "Ngày 17-2-1979, Trung Quốc huy động 60 vạn quân tấn công toàn tuyến biên giới phía Bắc nước ta." },
  { date: "8-1979", title: "Hội nghị Trung ương 6 khóa IV", detail: "Bước đột phá thứ nhất: Chủ trương cho 'sản xuất bung ra', xóa trạm kiểm soát, tự do trao đổi hàng hóa." },
  { date: "1-1981", title: "Quyết định 25-CP và 26-CP", detail: "Quyết định số 25-CP trao quyền tự chủ sản xuất, tự chủ tài chính cho xí nghiệp quốc doanh. Quyết định số 26-CP trả lương khoán theo sản phẩm, áp dụng hình thức thưởng." },
  { date: "13-1-1981", title: "Chỉ thị số 100-CT/TW", detail: "Chỉ thị số 100-CT/TW của Ban Bí thư: Khoán sản phẩm đến nhóm và người lao động trong hợp tác xã nông nghiệp. Kết quả: sản lượng lương thực bình quân tăng từ 13,4 lên 17 triệu tấn/năm." },
  { date: "27–31/3/1982", title: "Đại hội đại biểu toàn quốc lần thứ V", detail: "Đại hội V xác định nước ta đang ở chặng đường đầu tiên của thời kỳ quá độ lên chủ nghĩa xã hội, lấy nông nghiệp làm mặt trận hàng đầu." },
  { date: "6-1985", title: "Hội nghị Trung ương 8 khóa V", detail: "Bước đột phá thứ hai: Chủ trương xóa bỏ cơ chế kế hoạch hóa tập trung quan liêu hành chính, chuyển sang hạch toán, kinh doanh xã hội chủ nghĩa thông qua ba nội dung 'Giá – Lương – Tiền'." },
  { date: "14-9-1985", title: "Đổi tiền", detail: "Tiến hành đổi tiền: 10 đồng tiền hiện hành đổi lấy 1 đồng tiền mới." },
  { date: "10-7-1986", title: "Tổng Bí thư Lê Duẩn qua đời", detail: "Tổng Bí thư Lê Duẩn qua đời ngày 10-7-1986." },
  { date: "14-7-1986", title: "Đồng chí Trường Chinh làm Tổng Bí thư", detail: "Ban Chấp hành Trung ương họp bất thường, bầu đồng chí Trường Chinh giữ chức Tổng Bí thư, chuẩn bị mọi mặt cho Đại hội VI." },
  { date: "8-1986", title: "Hội nghị Bộ Chính trị khóa V", detail: "Bước đột phá thứ ba: Kết luận đối với một số vấn đề thuộc về quan điểm kinh tế (cơ cấu sản xuất, cải tạo xã hội chủ nghĩa, cơ chế quản lý kinh tế). Đây là bước quyết định cho sự ra đời của đường lối Đổi mới tại Đại hội VI." }
];

const overviewData = {
  part1: {
    title: "Phần 1 (1975–1981): Xây dựng Chủ nghĩa xã hội và Bảo vệ Tổ quốc",
    sections: [
      {
        heading: "1.1. Bối cảnh lịch sử",
        content: `<strong>Bối cảnh quốc tế:</strong> Các nước xã hội chủ nghĩa xuất hiện khủng hoảng, bộc lộ khuyết điểm về kinh tế-xã hội. Mâu thuẫn Xô-Trung ngày càng sâu sắc; Trung Quốc xa rời khối xã hội chủ nghĩa và bộc lộ âm mưu bá quyền, tìm cách phá thế địa chính trị của Việt Nam. Các thế lực thù địch (đứng đầu là Mỹ) bao vây, cấm vận, phá hoại sự phát triển của Việt Nam.<br><br>
                  <strong>Bối cảnh trong nước:</strong> Đất nước hòa bình nhưng chưa thống nhất về mặt Nhà nước (tồn tại song song Chính phủ Việt Nam Dân chủ Cộng hòa và Chính phủ Cách mạng lâm thời Cộng hòa miền Nam Việt Nam). Hiệp định Paris chưa được thi hành đầy đủ. Điểm xuất phát kinh tế-xã hội còn thấp, hậu quả chiến tranh nặng nề.`
      },
      {
        heading: "1.2. Hoàn thành thống nhất đất nước về mặt nhà nước",
        content: `Tiến hành Tổng tuyển cử bầu Quốc hội chung (25-4-1976), Kỳ họp thứ nhất Quốc hội (24-6 đến 3-7-1976) đổi tên nước, quốc kỳ, quốc ca và thống nhất các tổ chức chính trị - xã hội.`
      },
      {
        heading: "1.3. Đại hội đại biểu toàn quốc lần thứ IV của Đảng (12-1976)",
        content: `Đại hội IV đổi tên Đảng Lao động Việt Nam thành Đảng Cộng sản Việt Nam. Xác định đặc điểm lớn nhất là nền kinh tế nước ta còn phổ biến là sản xuất nhỏ, tiến thẳng lên chủ nghĩa xã hội bỏ qua giai đoạn phát triển tư bản chủ nghĩa.<br><br>
        <strong>Đường lối 4 lĩnh vực:</strong>
        <ul>
          <li><strong>Chính trị:</strong> Tăng cường chuyên chính vô sản, làm chủ tập thể xã hội chủ nghĩa; tiến hành đồng thời 3 cuộc cách mạng (quan hệ sản xuất, khoa học-kỹ thuật, tư tưởng-văn hóa).</li>
          <li><strong>Kinh tế:</strong> Cách mạng khoa học-kỹ thuật là then chốt; đẩy mạnh công nghiệp hóa, hiện đại hóa là trung tâm; phát triển công nghiệp nặng hợp lý.</li>
          <li><strong>Quốc phòng:</strong> Không ngừng nâng cao cảnh giác; bảo vệ Tổ quốc xã hội chủ nghĩa.</li>
          <li><strong>Đối ngoại:</strong> Giữ gìn quan hệ với Liên Xô và các nước xã hội chủ nghĩa; bảo vệ mối quan hệ Việt Nam - Lào - Campuchia.</li>
        </ul>
        <div class="callout warning">
          <strong>Hạn chế của Đại hội IV:</strong> Chưa tổng kết 21 năm xây dựng chủ nghĩa xã hội ở miền Bắc trong điều kiện đặc biệt nên chưa áp dụng đầy đủ các quy luật kinh tế. Chưa phát hiện những khuyết tật của mô hình chủ nghĩa xã hội đã bộc lộ rõ sau chiến tranh. Nóng vội khi dự kiến thời gian từ sản xuất nhỏ lên sản xuất lớn xã hội chủ nghĩa trong khoảng 20 năm, và nóng vội phát triển công nghiệp nặng với quy mô lớn, vượt quá khả năng thực tế.
        </div>`
      },
      {
        heading: "1.4. Các bước 'phá rào' đầu tiên",
        content: `Hội nghị Trung ương 6 khóa IV (8-1979) đánh dấu bước đột phá đầu tiên bằng chủ trương "cho sản xuất bung ra", xóa bỏ các trạm kiểm soát để hàng hóa lưu thông tự do. Tiếp đó, Chỉ thị số 100-CT/TW (1-1981) công nhận khoán sản phẩm trong nông nghiệp, và Quyết định số 25-CP, 26-CP mở rộng quyền tự chủ cho xí nghiệp quốc doanh.`
      },
      {
        heading: "1.5. Hai cuộc chiến tranh bảo vệ biên giới",
        content: `Việt Nam đã tiến hành thắng lợi cuộc chiến tranh bảo vệ biên giới Tây Nam, giải phóng Phnôm Pênh (7-1-1979) và cuộc chiến tranh bảo vệ biên giới phía Bắc chống 60 vạn quân Trung Quốc (từ 17-2-1979).`
      },
      {
        heading: "1.6. Kết quả và nguyên nhân",
        content: `Giành thắng lợi trong bảo vệ biên giới, bước đầu khôi phục kinh tế. Tuy nhiên, lưu thông, phân phối rối ren, lạm phát cao, và khủng hoảng kinh tế - xã hội xuất hiện do những khuyết điểm trong quản lý kinh tế, thiên tai và sự bao vây cấm vận của thế lực thù địch.`
      }
    ]
  },
  part2: {
    title: "Phần 2 (1982–1986): Đại hội V và Các bước đột phá",
    sections: [
      {
        heading: "2.1. Đại hội đại biểu toàn quốc lần thứ V (3-1982)",
        content: `Đại hội V xác định Việt Nam đang ở "chặng đường đầu tiên" của thời kỳ quá độ lên chủ nghĩa xã hội.
        <ul>
          <li><strong>Chính trị:</strong> Cơ bản giữ nguyên tinh thần Đại hội IV; chưa thừa nhận kinh tế nhiều thành phần.</li>
          <li><strong>Kinh tế:</strong> Lấy nông nghiệp làm mặt trận hàng đầu, khai thác tiềm năng, lợi thế; tiếp tục một số ngành công nghiệp nặng quan trọng phục vụ nông nghiệp; thực hiện chương trình ba mục tiêu: hàng lương thực-thực phẩm, hàng tiêu dùng, hàng xuất khẩu.</li>
          <li><strong>Đối ngoại:</strong> Quan hệ với Liên Xô là hòn đá tảng.</li>
        </ul>`
      },
      {
        heading: "2.2. Bước đột phá thứ hai: Hội nghị Trung ương 8 khóa V (6-1985)",
        content: `Lấy "Giá - Lương - Tiền" làm khâu đột phá để chuyển sang hạch toán kinh doanh xã hội chủ nghĩa.
        <table class="data-table">
          <tr><th>Yếu tố</th><th>Nội dung</th></tr>
          <tr><td>Giá</td><td>Chỉ quy định giá thiết yếu (xăng dầu, xi măng…); các mặt hàng khác theo chi phí sản xuất, lấy giá thóc làm chuẩn.</td></tr>
          <tr><td>Lương</td><td>Bù giá vào lương; lương đảm bảo đủ sống, không mang tính ước lệ.</td></tr>
          <tr><td>Tiền</td><td>Ngày 14-9-1985 tiến hành đổi tiền: 10 đồng tiền hiện hành đổi lấy 1 đồng tiền mới.</td></tr>
        </table>
        Việc thực hiện đổi tiền và điều chỉnh giá-lương vội vàng đã làm khủng hoảng kinh tế-xã hội trở nên trầm trọng hơn, nhưng bước đột phá về tư duy thừa nhận sản xuất hàng hóa là không thể đảo ngược.`
      },
      {
        heading: "2.3. Bước đột phá thứ ba: Hội nghị Bộ Chính trị khóa V (8-1986)",
        content: `Đưa ra kết luận quan trọng về quan điểm kinh tế:
        <ul>
          <li><strong>Cải tạo xã hội chủ nghĩa:</strong> Xác định cần thiết có kinh tế nhiều thành phần trong một thời kỳ lâu dài.</li>
          <li><strong>Cơ chế quản lý kinh tế:</strong> Vận dụng đúng đắn quy luật kinh tế xã hội chủ nghĩa và quy luật hàng-tiền; phân biệt chức năng quản lý hành chính nhà nước với quản lý sản xuất kinh doanh.</li>
        </ul>
        <div class="callout highlight">Đây là bước quyết định cho sự ra đời của đường lối Đổi mới toàn diện tại Đại hội VI.</div>`
      },
      {
        heading: "2.4. Chuyển giao lãnh đạo",
        content: `Sau khi Tổng Bí thư Lê Duẩn qua đời (10-7-1986), Ban Chấp hành Trung ương họp bất thường ngày 14-7-1986, bầu đồng chí Trường Chinh giữ chức Tổng Bí thư của Đảng và chuẩn bị mọi mặt cho Đại hội VI.`
      }
    ]
  }
};

const logicTreeData = [
  "Thống nhất đất nước",
  "Mô hình kinh tế tập trung bao cấp bộc lộ hạn chế (Đại hội IV)",
  "Các bước 'phá rào' tự phát từ cơ sở",
  "Đại hội V điều chỉnh nhưng chưa triệt để",
  "Ba bước đột phá liên tiếp (1979, 1985, 1986) tích lũy nhận thức mới",
  "Tiền đề trực tiếp cho đường lối Đổi mới toàn diện tại Đại hội VI"
];

const quizData = [
  {
    question: "Câu 1. Cuộc Tổng tuyển cử bầu Quốc hội chung của nước Việt Nam thống nhất diễn ra vào ngày nào?",
    options: ["A. 30-4-1975", "B. 25-4-1976", "C. 2-9-1976", "D. 3-7-1976"],
    correctIndex: 1,
    explanation: "Đáp án B. Ngày 25-4-1976, hơn 23 triệu cử tri (đạt tỉ lệ 98,77%) đã đi bầu, bầu ra 492 đại biểu Quốc hội chung của cả nước."
  },
  {
    question: "Câu 2. Tại kỳ họp thứ nhất Quốc hội nước Việt Nam thống nhất (24/6 - 3/7/1976), ai được bầu làm Chủ tịch nước?",
    options: ["A. Trường Chinh", "B. Tôn Đức Thắng", "C. Phạm Văn Đồng", "D. Lê Duẩn"],
    correctIndex: 1,
    explanation: "Đáp án B. Quốc hội đã bầu Tôn Đức Thắng làm Chủ tịch nước, Trường Chinh làm Chủ tịch Ủy ban Thường vụ Quốc hội, Phạm Văn Đồng làm Thủ tướng Chính phủ."
  },
  {
    question: "Câu 3. Đại hội đại biểu toàn quốc lần thứ IV của Đảng (12-1976) đã quyết định điều gì quan trọng về tên gọi của Đảng?",
    options: ["A. Giữ nguyên tên Đảng Lao động Việt Nam", "B. Đổi tên Đảng Lao động Việt Nam thành Đảng Cộng sản Việt Nam", "C. Đổi tên thành Đảng Cộng sản Đông Dương", "D. Sáp nhập với Mặt trận Tổ quốc Việt Nam"],
    correctIndex: 1,
    explanation: "Đáp án B. Đại hội IV quyết định đổi tên Đảng Lao động Việt Nam thành Đảng Cộng sản Việt Nam và sửa đổi Điều lệ Đảng."
  },
  {
    question: "Câu 4. Theo Đại hội IV, đặc điểm nào được xem là đặc trưng lớn nhất, quy định nội dung, hình thức, bước đi của cách mạng xã hội chủ nghĩa ở Việt Nam?",
    options: ["A. Kinh tế nước ta còn phổ biến là sản xuất nhỏ, tiến thẳng lên chủ nghĩa xã hội bỏ qua giai đoạn tư bản chủ nghĩa", "B. Đất nước hòa bình, thống nhất nhưng còn khó khăn do hậu quả chiến tranh", "C. Cuộc đấu tranh ý thức hệ trên thế giới còn gay go, quyết liệt", "D. Việt Nam bị các nước phương Tây bao vây cấm vận"],
    correctIndex: 0,
    explanation: "Đáp án A. Đại hội IV nêu 3 đặc điểm lớn, trong đó đặc điểm về nền kinh tế sản xuất nhỏ tiến thẳng lên chủ nghĩa xã hội, bỏ qua giai đoạn phát triển tư bản chủ nghĩa, được xác định là đặc điểm lớn nhất."
  },
  {
    question: "Câu 5. Chỉ thị số 100-CT/TW (1-1981) của Ban Bí thư có nội dung chủ yếu là gì?",
    options: ["A. Xóa bỏ cơ chế kế hoạch hóa tập trung quan liêu bao cấp", "B. Đổi tiền, quy định 10 đồng cũ đổi 1 đồng mới", "C. Trao quyền tự chủ tài chính cho xí nghiệp quốc doanh", "D. Khoán sản phẩm đến nhóm và người lao động trong các hợp tác xã nông nghiệp"],
    correctIndex: 3,
    explanation: "Đáp án D. Chỉ thị 100-CT/TW quy định khoán sản phẩm đến nhóm và người lao động trong hợp tác xã nông nghiệp, giúp sản lượng lương thực tăng từ 13,4 triệu tấn/năm lên 17 triệu tấn/năm."
  },
  {
    question: "Câu 6. Quân tình nguyện Việt Nam đã giải phóng Phnôm Pênh, đánh đổ chế độ diệt chủng Pôn Pốt vào ngày nào?",
    options: ["A. 7-1-1979", "B. 17-2-1979", "C. 26-12-1978", "D. 18-2-1979"],
    correctIndex: 0,
    explanation: "Đáp án A. Từ ngày 26-12-1978 quân tình nguyện Việt Nam phối hợp với Mặt trận đoàn kết dân tộc cứu nước Campuchia tổng tiến công, đến ngày 7-1-1979 giải phóng Phnôm Pênh."
  },
  {
    question: "Câu 7. Đại hội V của Đảng (3-1982) xác định Việt Nam đang ở giai đoạn nào của thời kỳ quá độ lên chủ nghĩa xã hội?",
    options: ["A. Giai đoạn hoàn thành công nghiệp hóa", "B. Chặng đường cuối cùng", "C. Chặng đường đầu tiên", "D. Giai đoạn quá độ trực tiếp"],
    correctIndex: 2,
    explanation: "Đáp án C. Đại hội V xác định nước ta đang ở chặng đường đầu tiên của thời kỳ quá độ lên chủ nghĩa xã hội, với thời kỳ 1981-1985 kéo dài đến 1990 có tầm quan trọng đặc biệt."
  },
  {
    question: "Câu 8. Hội nghị Trung ương 8 khóa V (6-1985) - bước đột phá thứ hai về đổi mới kinh tế - lấy nội dung nào làm khâu đột phá?",
    options: ["A. Khoán sản phẩm nông nghiệp", "B. Giá - Lương - Tiền", "C. Tự chủ sản xuất kinh doanh", "D. Cải tạo xã hội chủ nghĩa"],
    correctIndex: 1,
    explanation: "Đáp án B. Hội nghị Trung ương 8 khóa V chủ trương xóa bỏ cơ chế tập trung quan liêu bao cấp, lấy giá - lương - tiền làm khâu đột phá để chuyển sang cơ chế hạch toán, kinh doanh xã hội chủ nghĩa."
  },
  {
    question: "Câu 9. Hội nghị Bộ Chính trị khóa V (8-1986) - bước đột phá thứ ba - có ý nghĩa như thế nào đối với đường lối của Đảng?",
    options: ["A. Là bước quyết định cho sự ra đời của đường lối đổi mới tại Đại hội VI", "B. Là bước lùi so với các chủ trương trước đó", "C. Chỉ có ý nghĩa trong lĩnh vực quốc phòng", "D. Không có tác động đến các văn kiện sau này"],
    correctIndex: 0,
    explanation: "Đáp án A. Đây là bước đột phá thứ ba về đổi mới kinh tế, đồng thời là bước quyết định cho sự ra đời của đường lối đổi mới của Đảng, định hướng cho việc soạn thảo Báo cáo chính trị trình Đại hội VI."
  },
  {
    question: "Câu 10. Sau khi Tổng Bí thư Lê Duẩn qua đời (10-7-1986), ai được bầu giữ chức Tổng Bí thư để chuẩn bị cho Đại hội VI?",
    options: ["A. Trường Chinh", "B. Phạm Văn Đồng", "C. Nguyễn Văn Linh", "D. Võ Nguyên Giáp"],
    correctIndex: 0,
    explanation: "Đáp án A. Ngày 14-7-1986, Ban Chấp hành Trung ương Đảng họp Hội nghị bất thường bầu đồng chí Trường Chinh giữ chức Tổng Bí thư của Đảng và chuẩn bị mọi mặt cho Đại hội VI."
  }
];

const decisionGameData = {
  intro: {
    context: "Đất nước thống nhất năm 1975 nhưng bước vào quá độ lên CNXH trong hoàn cảnh cực kỳ khó khăn: sản xuất nhỏ lạc hậu, hậu quả chiến tranh nặng nề, bị bao vây cấm vận, rồi phải đồng thời chiến đấu bảo vệ biên giới Tây Nam và biên giới phía Bắc (1978–1979). Mô hình quản lý kinh tế tập trung, quan liêu, bao cấp bộc lộ rõ sự trì trệ. Cuối năm 1979, ở một số địa phương miền Bắc đã tự phát xuất hiện hiện tượng 'khoán chui' trong hợp tác xã nông nghiệp — nông dân lén chia đất, tự khoán sản phẩm dù trái với chủ trương chính thức.",
    question: "Nếu bạn là lãnh đạo Trung ương, nghe báo cáo địa phương đang làm 'khoán chui' — bạn sẽ:",
    options: ["(a) Yêu cầu chấn chỉnh ngay", "(b) Cử người xuống tìm hiểu tại sao dân lại làm vậy"]
  },
  cards: [
    {
      id: 1,
      title: "THẺ 1 — ĐỘT PHÁ THỨ NHẤT: Hội nghị Trung ương 6 khóa IV (8-1979)",
      situation: "Kinh tế trì trệ, 'sản xuất không bung ra được' vì rào cản hành chính, thuế, trạm kiểm soát lưu thông hàng hóa. Hội nghị Trung ương 6 phải quyết định hướng xử lý.",
      options: [
        { label: "A. Cho thí điểm chủ trương mới ở một vài địa phương có 'khoán chui', theo dõi kết quả rồi mới cân nhắc mở rộng.", deltas: { doiMoi: 2, onDinh: 0, niemTin: 1 }, isHistorical: false },
        { label: "B. Chủ trương 'cho sản xuất bung ra' trên diện rộng: xóa bỏ các trạm kiểm soát để hàng hóa được lưu thông tự do ra thị trường.", deltas: { doiMoi: 5, onDinh: 3, niemTin: 5 }, isHistorical: true },
        { label: "C. Giữ nguyên cơ chế tập trung, chỉ đạo các địa phương xử lý nghiêm hiện tượng 'khoán chui' đang lan rộng.", deltas: { doiMoi: 1, onDinh: -2, niemTin: -5 }, isHistorical: false }
      ],
      debrief: "Đây được giáo trình gọi là 'bước đột phá đầu tiên đổi mới kinh tế của Đảng' — quan trọng không phải vì giải quyết dứt điểm vấn đề, mà vì lần đầu tiên Trung ương chính thức thừa nhận phải 'phá rào'. Đây là hạt giống nhận thức cho các bước sau."
    },
    {
      id: 2,
      title: "THẺ 2 — THỂ CHẾ HÓA: Chỉ thị 100-CT/TW (1-1981) và Quyết định 25-CP, 26-CP",
      situation: "'Khoán chui' vẫn lan rộng; đồng thời ở TP.HCM và Long An xuất hiện 'xé rào' bù giá vào lương. Ban Bí thư và Chính phủ phải quyết định có hợp thức hóa các sáng kiến này không.",
      options: [
        { label: "A. Chấn chỉnh và dẹp bỏ các hiện tượng 'khoán chui', 'xé rào' để giữ vững kỷ luật quản lý tập trung.", deltas: { doiMoi: 1, onDinh: -5, niemTin: -8 }, isHistorical: false },
        { label: "B. Chỉ hợp thức hóa khoán sản phẩm nông nghiệp, còn khu vực công nghiệp vẫn giữ nguyên bao cấp.", deltas: { doiMoi: 3, onDinh: 2, niemTin: 2 }, isHistorical: false },
        { label: "C. Ban hành Chỉ thị 100-CT/TW công nhận khoán sản phẩm nông nghiệp; đồng thời trao quyền tự chủ sản xuất – tài chính cho xí nghiệp quốc doanh.", deltas: { doiMoi: 5, onDinh: 5, niemTin: 5 }, isHistorical: true }
      ],
      debrief: "Đây là ví dụ rõ nhất về tính tích lũy đi từ dưới lên: sáng kiến tự phát của dân → được Đảng lắng nghe, thí điểm → thể chế hóa thành chính sách quốc gia. Bước đột phá 8-1979 đã 'mở khóa' cho bước này diễn ra nhanh và mạnh hơn."
    },
    {
      id: 3,
      title: "THẺ 3 — THỬ THÁCH: Đại hội V (3-1982)",
      situation: "Đại hội V họp giữa lúc khủng hoảng kinh tế – xã hội. Đại hội phải quyết định: tiếp tục đường lối cũ hay thừa nhận nền kinh tế nhiều thành phần?",
      options: [
        { label: "A. Thừa nhận ngay lập tức nền kinh tế nhiều thành phần và cơ chế thị trường, chuyển trọng tâm sang nông nghiệp và hàng tiêu dùng.", deltas: { doiMoi: 2, onDinh: 0, niemTin: 1 }, isHistorical: false },
        { label: "B. Xác định lấy nông nghiệp làm mặt trận hàng đầu, nhưng chưa thừa nhận kinh tế nhiều thành phần, vẫn tiếp tục đầu tư tràn lan cho công nghiệp nặng.", deltas: { doiMoi: 3, onDinh: 0, niemTin: 1 }, isHistorical: true },
        { label: "C. Giữ nguyên hoàn toàn đường lối kinh tế do Đại hội IV đã đề ra, không đưa ra điều chỉnh nào.", deltas: { doiMoi: 0, onDinh: -3, niemTin: -3 }, isHistorical: false }
      ],
      debrief: "Đại hội V là bước tiến chậm, nửa vời (chưa thừa nhận kinh tế nhiều thành phần) — nhưng vẫn là một mắt xích cần thiết, vì nó cho thấy giới hạn của nhận thức cũ, tạo áp lực cho bước đột phá tiếp theo."
    },
    {
      id: 4,
      title: "THẺ 4 — ĐỘT PHÁ THỨ HAI: Hội nghị Trung ương 8 khóa V (6-1985)",
      situation: "TW8 phải quyết định có xóa bỏ hẳn cơ chế bao cấp về giá và lương hay không — một bước đi rủi ro rất cao.",
      options: [
        { label: "A. Không xóa bỏ bao cấp về giá và lương, tiếp tục duy trì cấp phát theo tem phiếu.", deltas: { doiMoi: 1, onDinh: -1, niemTin: -4 }, isHistorical: false },
        { label: "B. Thực hiện thí điểm cơ chế một giá dần từng phần ở một số ngành hàng.", deltas: { doiMoi: 4, onDinh: 1, niemTin: 3 }, isHistorical: false },
        { label: "C. Chủ trương xóa bỏ cơ chế tập trung quan liêu bao cấp, lấy Giá – Lương – Tiền làm khâu đột phá, thực hiện cơ chế một giá.", deltas: { doiMoi: 7, onDinh: -6, niemTin: 2 }, isHistorical: true }
      ],
      debrief: "Thất bại trong triển khai không phủ nhận giá trị của bước đột phá về nhận thức. Dù chỉ số Ổn định giảm mạnh, tư duy đã 'thừa nhận sản xuất hàng hóa' — bước tiến không thể đảo ngược, thể hiện bản chất tích lũy của đổi mới."
    },
    {
      id: 5,
      title: "THẺ 5 — ĐỘT PHÁ THỨ BA: Kết luận của Bộ Chính trị khóa V (8-1986)",
      situation: "Khủng hoảng kinh tế – xã hội kéo dài. Tổng Bí thư Lê Duẩn qua đời. Bộ Chính trị phải đưa ra Kết luận ngay trước thềm Đại hội VI.",
      options: [
        { label: "A. Tạm dừng đưa ra quan điểm kinh tế mới, chỉ điều chỉnh kỹ thuật nhỏ trong cơ chế hiện hành.", deltas: { doiMoi: 2, onDinh: -2, niemTin: -3 }, isHistorical: false },
        { label: "B. Đưa ra kết luận toàn diện: thừa nhận nền kinh tế nhiều thành phần, trao quyền tự chủ sản xuất kinh doanh cho cơ sở.", deltas: { doiMoi: 8, onDinh: 4, niemTin: 6 }, isHistorical: true },
        { label: "C. Quay trở lại thắt chặt quản lý tập trung để ổn định lạm phát.", deltas: { doiMoi: 0, onDinh: -1, niemTin: -5 }, isHistorical: false }
      ],
      debrief: "Đây là bước quyết định. Nó kết tinh của hai bước đột phá trước đó cộng với bài học từ thất bại giá – lương – tiền, cho thấy rõ đường đi tích lũy nhận thức qua 7 năm trước khi tiến tới Đại hội VI."
    }
  ],
  summaryTimeline: [
    { time: "Cuối 1979", event: "'Khoán chui' tự phát ở cơ sở", retained: "Bằng chứng thực tiễn: cơ chế cũ không còn phù hợp" },
    { time: "8-1979", event: "TW6: 'cho sản xuất bung ra'", retained: "Nguyên tắc: chấp nhận phá rào có kiểm soát" },
    { time: "1-1981", event: "Chỉ thị 100, QĐ 25/26-CP", retained: "Thể chế hóa khoán sản phẩm + tự chủ xí nghiệp → mô hình thí điểm thành công" },
    { time: "3-1982", event: "Đại hội V", retained: "Nhận diện rõ giới hạn còn lại: chưa chấp nhận kinh tế nhiều thành phần" },
    { time: "6-1985", event: "TW8: Giá – Lương – Tiền", retained: "Thừa nhận quy luật sản xuất hàng hóa → bài học về cách làm" },
    { time: "8-1986", event: "Kết luận Bộ Chính trị", retained: "Tổng hợp toàn bộ: cơ cấu sản xuất + kinh tế nhiều thành phần + cơ chế quản lý mới" },
    { time: "12-1986", event: "Đại hội VI", retained: "Chính thức hóa thành đường lối Đổi mới toàn diện" }
  ]
};
