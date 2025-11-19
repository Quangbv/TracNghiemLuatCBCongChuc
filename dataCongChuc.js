// Dữ liệu câu hỏi trắc nghiệm Luật Cán bộ, Công chức
// Được biên soạn từ tài liệu: 01_Luật cán bộ, Công chức.docx

const dataCongChuc = {
    "Qj": [
        {
            "question": "Cán bộ là công dân Việt Nam, được bầu cử, phê chuẩn, bổ nhiệm hoặc chỉ định giữ chức vụ, chức danh theo nhiệm kỳ trong cơ quan nào?",
            "hint": "Cán bộ làm việc trong các cơ quan thuộc hệ thống chính trị và hưởng lương từ ngân sách.",
            "yB": [
                { "text": "Chỉ trong cơ quan Nhà nước", "nv": false, "zK": "Thiếu các tổ chức khác trong hệ thống chính trị." },
                { "text": "Cơ quan của Đảng, Nhà nước, MTTQ Việt Nam, các tổ chức chính trị - xã hội", "nv": true, "zK": "Khoản 1 Điều 1: Cán bộ là công dân Việt Nam... trong cơ quan của Đảng Cộng sản Việt Nam, Nhà nước, Mặt trận Tổ quốc Việt Nam, các tổ chức chính trị - xã hội..." },
                { "text": "Các doanh nghiệp nhà nước", "nv": false, "zK": "Cán bộ không làm việc trong doanh nghiệp (đó là người quản lý doanh nghiệp)." },
                { "text": "Các đơn vị sự nghiệp công lập", "nv": false, "zK": "Người làm việc trong đơn vị sự nghiệp công lập thường là Viên chức." }
            ]
        },
        {
            "question": "Công chức khác với Cán bộ ở điểm cơ bản nào trong khâu tuyển dụng/bổ nhiệm?",
            "hint": "Cán bộ thường gắn với nhiệm kỳ, còn công chức gắn với vị trí việc làm lâu dài.",
            "yB": [
                { "text": "Được bầu cử theo nhiệm kỳ", "nv": false, "zK": "Đây là đặc điểm của Cán bộ." },
                { "text": "Được tuyển dụng vào vị trí việc làm", "nv": true, "zK": "Khoản 2 Điều 1: Công chức là công dân Việt Nam, được tuyển dụng vào vị trí việc làm..." },
                { "text": "Làm việc theo chế độ hợp đồng lao động", "nv": false, "zK": "Đây thường là chế độ của người lao động hoặc một số viên chức." },
                { "text": "Không hưởng lương từ ngân sách", "nv": false, "zK": "Cả cán bộ và công chức đều hưởng lương từ ngân sách nhà nước." }
            ]
        },
        {
            "question": "Đâu KHÔNG phải là nguyên tắc trong thi hành công vụ?",
            "hint": "Nguyên tắc thi hành công vụ tập trung vào tính hợp pháp, công khai và hệ thống.",
            "yB": [
                { "text": "Tuân thủ Hiến pháp và pháp luật", "nv": false, "zK": "Đây là nguyên tắc tại Khoản 1 Điều 2." },
                { "text": "Công khai, minh bạch, đúng thẩm quyền", "nv": false, "zK": "Đây là nguyên tắc tại Khoản 3 Điều 2." },
                { "text": "Tự do kinh doanh và làm giàu", "nv": true, "zK": "Điều 2 không quy định nguyên tắc này. Ngược lại, cán bộ công chức có những hạn chế về kinh doanh." },
                { "text": "Bảo đảm thứ bậc hành chính và sự phối hợp chặt chẽ", "nv": false, "zK": "Đây là nguyên tắc tại Khoản 5 Điều 2." }
            ]
        },
        {
            "question": "Việc đánh giá, bố trí, sử dụng cán bộ, công chức phải căn cứ vào yếu tố nào?",
            "hint": "Cần dựa trên cả phẩm chất và kết quả công việc.",
            "yB": [
                { "text": "Chỉ căn cứ vào bằng cấp chuyên môn", "nv": false, "zK": "Chưa đủ." },
                { "text": "Căn cứ vào phẩm chất chính trị, đạo đức, năng lực và kết quả thực thi nhiệm vụ", "nv": true, "zK": "Khoản 4 Điều 3: Việc đánh giá... phải căn cứ vào phẩm chất chính trị, đạo đức, năng lực và kết quả, hiệu quả thực thi nhiệm vụ theo yêu cầu vị trí việc làm." },
                { "text": "Căn cứ vào thâm niên công tác", "nv": false, "zK": "Thâm niên không phải là yếu tố quyết định chính được nêu trong nguyên tắc quản lý." },
                { "text": "Căn cứ vào ý kiến chủ quan của lãnh đạo", "nv": false, "zK": "Phải khách quan dựa trên kết quả và năng lực." }
            ]
        },
        {
            "question": "Thuật ngữ 'Vị trí việc làm' được hiểu là gì?",
            "hint": "Gắn liền với chức danh, chức vụ và cơ cấu ngạch.",
            "yB": [
                { "text": "Là ghế ngồi làm việc tại cơ quan", "nv": false, "zK": "Không chính xác." },
                { "text": "Là công việc gắn với chức vụ, chức danh, ngạch công chức", "nv": true, "zK": "Khoản 4 Điều 5: Vị trí việc làm là công việc gắn với chức vụ, chức danh, ngạch công chức trên cơ sở chức năng, nhiệm vụ cụ thể..." },
                { "text": "Là nơi làm việc cụ thể của công chức", "nv": false, "zK": "Đây là địa điểm làm việc." },
                { "text": "Là chức vụ lãnh đạo quản lý", "nv": false, "zK": "Vị trí việc làm bao gồm cả chuyên môn nghiệp vụ, không chỉ lãnh đạo." }
            ]
        },
        {
            "question": "Việc cán bộ, công chức lãnh đạo, quản lý tự nguyện xin thôi giữ chức vụ khi chưa hết nhiệm kỳ gọi là gì?",
            "hint": "Hành động xuất phát từ nguyện vọng cá nhân.",
            "yB": [
                { "text": "Miễn nhiệm", "nv": false, "zK": "Miễn nhiệm là quyết định của cơ quan có thẩm quyền cho thôi giữ chức vụ (Khoản 12 Điều 5)." },
                { "text": "Bãi nhiệm", "nv": false, "zK": "Bãi nhiệm là hình thức kỷ luật buộc thôi giữ chức vụ do bầu cử." },
                { "text": "Từ chức", "nv": true, "zK": "Khoản 11 Điều 5: Từ chức là việc cán bộ, công chức lãnh đạo, quản lý tự nguyện xin thôi giữ chức vụ..." },
                { "text": "Giáng chức", "nv": false, "zK": "Giáng chức là hình thức kỷ luật." }
            ]
        },
        {
            "question": "Luân chuyển là việc phân công cán bộ, công chức lãnh đạo giữ chức vụ tại cơ quan khác nhằm mục đích gì?",
            "hint": "Mục đích chính là để rèn luyện và đào tạo.",
            "yB": [
                { "text": "Để kỷ luật cán bộ", "nv": false, "zK": "Luân chuyển không phải là hình thức kỷ luật." },
                { "text": "Để tiếp tục đào tạo, bồi dưỡng và rèn luyện", "nv": true, "zK": "Khoản 9 Điều 5: ...để tiếp tục đào tạo, bồi dưỡng và rèn luyện theo yêu cầu nhiệm vụ hoặc theo yêu cầu của chức danh được quy hoạch." },
                { "text": "Do cơ quan cũ thừa biên chế", "nv": false, "zK": "Không phải mục đích chính của luân chuyển." },
                { "text": "Để giải quyết mâu thuẫn nội bộ", "nv": false, "zK": "Sai bản chất pháp lý." }
            ]
        },
        {
            "question": "Nghĩa vụ nào sau đây thuộc về nghĩa vụ của cán bộ, công chức đối với Đảng, Nhà nước và Nhân dân?",
            "hint": "Liên quan đến lòng trung thành và thái độ với Nhân dân.",
            "yB": [
                { "text": "Bảo vệ bí mật nhà nước", "nv": false, "zK": "Đây là nghĩa vụ trong thi hành công vụ (Điều 7)." },
                { "text": "Tuyệt đối trung thành với Đảng, Nhà nước; tôn trọng Nhân dân", "nv": true, "zK": "Khoản 1, 2 Điều 6: Tuyệt đối trung thành với Đảng... Tôn trọng và bảo vệ quyền con người, quyền công dân, tận tụy phục vụ Nhân dân." },
                { "text": "Sử dụng tiết kiệm tài sản công", "nv": false, "zK": "Đây là nghĩa vụ trong thi hành công vụ (Điều 7)." },
                { "text": "Chấp hành quyết định của cấp trên", "nv": false, "zK": "Đây là nghĩa vụ trong thi hành công vụ (Điều 7)." }
            ]
        },
        {
            "question": "Khi có căn cứ cho rằng quyết định của cấp trên là trái pháp luật, cán bộ, công chức phải làm gì?",
            "hint": "Không được tự ý thực hiện ngay, cũng không được lờ đi.",
            "yB": [
                { "text": "Tuyệt đối chấp hành ngay lập tức", "nv": false, "zK": "Nếu trái luật mà chấp hành ngay là sai nguyên tắc." },
                { "text": "Từ chối thực hiện và bỏ về", "nv": false, "zK": "Hành vi này là tự ý bỏ việc, vi phạm kỷ luật." },
                { "text": "Báo cáo bằng văn bản với người ra quyết định", "nv": true, "zK": "Khoản 5 Điều 7: ...phải kịp thời báo cáo bằng văn bản với người ra quyết định; trường hợp người ra quyết định vẫn quyết định việc thi hành thì phải chấp hành... và không phải chịu trách nhiệm." },
                { "text": "Tố cáo ngay với cơ quan công an", "nv": false, "zK": "Quy trình đầu tiên là phải báo cáo lại với người ra quyết định." }
            ]
        },
        {
            "question": "Người đứng đầu cơ quan có nghĩa vụ gì trong việc giải quyết thủ tục hành chính?",
            "hint": "Phải làm cho thủ tục gọn nhẹ hơn.",
            "yB": [
                { "text": "Tăng cường thêm thủ tục để quản lý chặt chẽ", "nv": false, "zK": "Đi ngược lại chủ trương cải cách hành chính." },
                { "text": "Thường xuyên rà soát để bảo đảm cắt giảm tối đa thủ tục hành chính", "nv": true, "zK": "Khoản 5 Điều 8: Thường xuyên rà soát để bảo đảm cắt giảm tối đa thủ tục hành chính, tạo điều kiện thuận lợi cho người dân..." },
                { "text": "Ủy quyền toàn bộ cho cấp phó", "nv": false, "zK": "Người đứng đầu phải chịu trách nhiệm lãnh đạo, chỉ đạo." },
                { "text": "Chỉ giải quyết khi có khiếu nại", "nv": false, "zK": "Phải chủ động lãnh đạo, chỉ đạo thường xuyên." }
            ]
        },
        {
            "question": "Cán bộ, công chức có quyền gì về tiền lương?",
            "hint": "Lương phải gắn với kết quả và vị trí.",
            "yB": [
                { "text": "Hưởng lương cào bằng như nhau", "nv": false, "zK": "Lương theo vị trí việc làm và kết quả." },
                { "text": "Được hưởng tiền lương tương xứng với thâm niên bất kể hiệu quả", "nv": false, "zK": "Phải theo kết quả, sản phẩm." },
                { "text": "Được hưởng tiền lương, tiền thưởng theo kết quả, sản phẩm của vị trí việc làm", "nv": true, "zK": "Khoản 1 Điều 10: Được hưởng tiền lương, tiền thưởng và các khoản thu nhập khác theo kết quả, sản phẩm của vị trí việc làm đảm nhiệm..." },
                { "text": "Tự quyết định mức lương của mình", "nv": false, "zK": "Lương do Nhà nước quy định." }
            ]
        },
        {
            "question": "Nếu do yêu cầu nhiệm vụ mà cán bộ, công chức không sử dụng hết số ngày nghỉ hằng năm thì quyền lợi là gì?",
            "hint": "Được bù đắp bằng tài chính.",
            "yB": [
                { "text": "Bị mất số ngày nghỉ đó", "nv": false, "zK": "Thiệt thòi cho công chức." },
                { "text": "Được thanh toán thêm một khoản tiền bằng tiền lương cho những ngày không nghỉ", "nv": true, "zK": "Khoản 1 Điều 11: ...thì ngoài tiền lương còn được thanh toán thêm một khoản tiền bằng tiền lương cho những ngày không nghỉ." },
                { "text": "Được bảo lưu sang 5 năm sau", "nv": false, "zK": "Luật không quy định bảo lưu lâu như vậy." },
                { "text": "Được nghỉ bù gấp đôi vào năm sau", "nv": false, "zK": "Không có quy định này." }
            ]
        },
        {
            "question": "Trong văn hóa giao tiếp ở công sở, cán bộ, công chức phải như thế nào?",
            "hint": "Thái độ với đồng nghiệp.",
            "yB": [
                { "text": "Giữ khoảng cách, ít giao tiếp", "nv": false, "zK": "Cần sự phối hợp." },
                { "text": "Có thái độ lịch sự, tôn trọng đồng nghiệp; lắng nghe ý kiến", "nv": true, "zK": "Khoản 1 Điều 13: ...thái độ lịch sự, tôn trọng đồng nghiệp; lắng nghe ý kiến của đồng nghiệp..." },
                { "text": "Bảo vệ đồng nghiệp bất kể đúng sai", "nv": false, "zK": "Phải công bằng, vô tư, khách quan (Điểm b Khoản 1 Điều 13)." },
                { "text": "Chỉ giao tiếp với cấp trên", "nv": false, "zK": "Sai quy định văn hóa." }
            ]
        },
        {
            "question": "Hành vi nào sau đây bị nghiêm cấm trong văn hóa giao tiếp với Nhân dân?",
            "hint": "Thái độ cửa quyền.",
            "yB": [
                { "text": "Đeo thẻ công chức", "nv": false, "zK": "Đây là việc phải làm." },
                { "text": "Hách dịch, cửa quyền, gây khó khăn, phiền hà", "nv": true, "zK": "Điểm c Khoản 2 Điều 13: Nghiêm cấm hành vi hách dịch, cửa quyền, thiếu trách nhiệm, gây khó khăn, phiền hà..." },
                { "text": "Lắng nghe ý kiến nhân dân", "nv": false, "zK": "Đây là việc phải làm." },
                { "text": "Ngôn ngữ giao tiếp mạch lạc", "nv": false, "zK": "Đây là việc phải làm." }
            ]
        },
        {
            "question": "Đâu là việc cán bộ, công chức KHÔNG được làm liên quan đến đạo đức công vụ?",
            "hint": "Liên quan đến trách nhiệm và đoàn kết.",
            "yB": [
                { "text": "Trốn tránh, thoái thác nhiệm vụ; gây bè phái, mất đoàn kết", "nv": true, "zK": "Khoản 1 Điều 14: Trốn tránh, thoái thác, né tránh, đùn đẩy... gây bè phái, mất đoàn kết..." },
                { "text": "Phê bình đồng nghiệp trong cuộc họp", "nv": false, "zK": "Đây là quyền và trách nhiệm xây dựng (nếu đúng mực)." },
                { "text": "Từ chức khi không đủ năng lực", "nv": false, "zK": "Đây là văn hóa từ chức được khuyến khích." },
                { "text": "Nghỉ phép đúng quy định", "nv": false, "zK": "Đây là quyền lợi." }
            ]
        },
        {
            "question": "Cán bộ, công chức có được sử dụng tài sản công phục vụ mục đích cá nhân không?",
            "hint": "Quy định về những việc không được làm.",
            "yB": [
                { "text": "Được phép nếu là người đứng đầu", "nv": false, "zK": "Không ai được phép trái luật." },
                { "text": "Được phép nếu trả tiền thuê", "nv": false, "zK": "Trừ khi có quy định cụ thể về việc khai thác tài sản công, còn lạm dụng là cấm." },
                { "text": "Không. Sử dụng tài sản công trái pháp luật là việc không được làm", "nv": true, "zK": "Khoản 3 Điều 14: Sử dụng tài sản công của Nhà nước và tài sản của Nhân dân trái pháp luật." },
                { "text": "Được phép vào ngày nghỉ", "nv": false, "zK": "Vẫn là tài sản công." }
            ]
        },
        {
            "question": "Thời hạn bổ nhiệm công chức giữ chức vụ lãnh đạo, quản lý là bao nhiêu năm?",
            "hint": "Con số phổ biến cho một nhiệm kỳ bổ nhiệm.",
            "yB": [
                { "text": "03 năm", "nv": false, "zK": "Quá ngắn." },
                { "text": "05 năm", "nv": true, "zK": "Khoản 2 Điều 31: Thời hạn bổ nhiệm công chức giữ chức vụ lãnh đạo, quản lý là 05 năm." },
                { "text": "10 năm", "nv": false, "zK": "Quá dài." },
                { "text": "Vĩnh viễn đến khi nghỉ hưu", "nv": false, "zK": "Bổ nhiệm có thời hạn." }
            ]
        },
        {
            "question": "Người nào sau đây KHÔNG được đăng ký dự tuyển công chức?",
            "hint": "Liên quan đến năng lực hành vi và trách nhiệm hình sự.",
            "yB": [
                { "text": "Người dân tộc thiểu số", "nv": false, "zK": "Đây là đối tượng ưu tiên." },
                { "text": "Người cư trú tại nông thôn", "nv": false, "zK": "Không phân biệt nơi cư trú." },
                { "text": "Người mất năng lực hành vi dân sự; đang bị truy cứu trách nhiệm hình sự", "nv": true, "zK": "Khoản 3 Điều 19: Mất hoặc bị hạn chế năng lực hành vi dân sự... Đang bị truy cứu trách nhiệm hình sự..." },
                { "text": "Người đã tốt nghiệp đại học", "nv": false, "zK": "Đây là điều kiện thuận lợi." }
            ]
        },
        {
            "question": "Độ tuổi tối thiểu để đăng ký dự tuyển công chức là bao nhiêu?",
            "hint": "Tuổi thành niên theo luật.",
            "yB": [
                { "text": "Đủ 16 tuổi", "nv": false, "zK": "Chưa đủ tuổi chịu trách nhiệm đầy đủ." },
                { "text": "Đủ 18 tuổi", "nv": true, "zK": "Điểm c Khoản 1 Điều 19: Đủ 18 tuổi trở lên." },
                { "text": "Đủ 20 tuổi", "nv": false, "zK": "Cao hơn luật định." },
                { "text": "Đủ 22 tuổi", "nv": false, "zK": "Cao hơn luật định." }
            ]
        },
        {
            "question": "Phương thức tuyển dụng công chức bao gồm những hình thức nào?",
            "hint": "Gồm thi và xét.",
            "yB": [
                { "text": "Chỉ Thi tuyển", "nv": false, "zK": "Thiếu xét tuyển." },
                { "text": "Thi tuyển và Xét tuyển", "nv": true, "zK": "Khoản 1 Điều 20: Việc tuyển dụng... thông qua các phương thức: a) Thi tuyển; b) Xét tuyển..." },
                { "text": "Chỉ Xét tuyển", "nv": false, "zK": "Thiếu thi tuyển." },
                { "text": "Bầu cử", "nv": false, "zK": "Bầu cử dành cho Cán bộ." }
            ]
        },
        {
            "question": "Ngạch công chức cao nhất là ngạch nào?",
            "hint": "Dành cho những chuyên gia đầu ngành.",
            "yB": [
                { "text": "Chuyên viên cao cấp", "nv": false, "zK": "Dưới chuyên gia cao cấp." },
                { "text": "Chuyên gia cao cấp", "nv": true, "zK": "Khoản 1 Điều 24: a) Chuyên gia cao cấp; b) Chuyên viên cao cấp..." },
                { "text": "Chuyên viên chính", "nv": false, "zK": "Thấp hơn chuyên viên cao cấp." },
                { "text": "Cán sự", "nv": false, "zK": "Ngạch thấp." }
            ]
        },
        {
            "question": "Kết quả xếp loại chất lượng công chức hằng năm gồm các mức nào?",
            "hint": "Có 4 mức độ.",
            "yB": [
                { "text": "Xuất sắc, Tốt, Khá, Trung bình", "nv": false, "zK": "Sai tên gọi theo luật." },
                { "text": "Hoàn thành xuất sắc, Hoàn thành tốt, Hoàn thành, Không hoàn thành nhiệm vụ", "nv": true, "zK": "Khoản 1 Điều 26: a) Hoàn thành xuất sắc nhiệm vụ; b) Hoàn thành tốt nhiệm vụ; c) Hoàn thành nhiệm vụ; d) Không hoàn thành nhiệm vụ." },
                { "text": "Loại A, Loại B, Loại C, Loại D", "nv": false, "zK": "Luật không dùng ký hiệu này." },
                { "text": "Đạt và Không đạt", "nv": false, "zK": "Quá sơ sài." }
            ]
        },
        {
            "question": "Nếu công chức 02 năm liên tiếp bị xếp loại chất lượng ở mức không hoàn thành nhiệm vụ thì bị xử lý thế nào?",
            "hint": "Cơ quan sẽ cho thôi việc.",
            "yB": [
                { "text": "Bị hạ ngạch", "nv": false, "zK": "Không phải quy định cho trường hợp này." },
                { "text": "Bị luân chuyển", "nv": false, "zK": "Luân chuyển để đào tạo, không phải để loại bỏ." },
                { "text": "Buộc thôi việc", "nv": true, "zK": "Dựa trên tinh thần Luật (Điều 27, Khoản 1c đề cập cho thôi việc nếu không hoàn thành nhiệm vụ - Luật cũ quy định rõ 2 năm, luật này tại Điểm b Khoản 1 Điều 32 dẫn chiếu Điều 27: Không hoàn thành nhiệm vụ... đến mức phải cho thôi việc)." },
                { "text": "Bị khiển trách", "nv": false, "zK": "Mức này quá nhẹ." }
            ]
        },
        {
            "question": "Công chức được cử đi đào tạo nếu tự ý bỏ việc thì phải chịu trách nhiệm gì?",
            "hint": "Liên quan đến chi phí.",
            "yB": [
                { "text": "Không chịu trách nhiệm gì", "nv": false, "zK": "Sai." },
                { "text": "Bị phạt tù", "nv": false, "zK": "Đây là quan hệ hành chính/dân sự, không phải hình sự." },
                { "text": "Phải đền bù chi phí đào tạo", "nv": true, "zK": "Khoản 4 Điều 29: Công chức được đào tạo nếu tự ý bỏ việc, thôi việc phải đền bù chi phí đào tạo..." },
                { "text": "Chỉ bị khiển trách", "nv": false, "zK": "Phải đền bù tiền." }
            ]
        },
        {
            "question": "Biệt phái công chức là gì?",
            "hint": "Cử đi làm việc nơi khác có thời hạn nhưng vẫn thuộc biên chế cơ quan cũ.",
            "yB": [
                { "text": "Chuyển hẳn sang cơ quan khác", "nv": false, "zK": "Đó là điều động." },
                { "text": "Cử đến làm việc có thời hạn tại cơ quan khác, vẫn thuộc biên chế cơ quan cử", "nv": true, "zK": "Khoản 10 Điều 5 (Định nghĩa) và Khoản 2 Điều 30: công chức biệt phái vẫn thuộc biên chế của cơ quan cử biệt phái." },
                { "text": "Thôi giữ chức vụ lãnh đạo", "nv": false, "zK": "Đó là từ chức/miễn nhiệm." },
                { "text": "Nghỉ không lương", "nv": false, "zK": "Sai." }
            ]
        },
        {
            "question": "Hình thức kỷ luật nào áp dụng đối với Cán bộ?",
            "hint": "Gồm 4 hình thức, trong đó có Bãi nhiệm.",
            "yB": [
                { "text": "Khiển trách, Cảnh cáo, Hạ bậc lương, Buộc thôi việc", "nv": false, "zK": "Hạ bậc lương và Buộc thôi việc không áp dụng cho Cán bộ (bầu cử)." },
                { "text": "Khiển trách, Cảnh cáo, Cách chức, Bãi nhiệm", "nv": true, "zK": "Khoản 1 Điều 35: a) Khiển trách; b) Cảnh cáo; c) Cách chức...; d) Bãi nhiệm." },
                { "text": "Khiển trách, Cảnh cáo, Giáng chức, Cách chức", "nv": false, "zK": "Giáng chức không áp dụng cho Cán bộ trong luật này." },
                { "text": "Khiển trách, Cảnh cáo, Bãi nhiệm, Buộc thôi việc", "nv": false, "zK": "Buộc thôi việc dùng cho Công chức." }
            ]
        },
        {
            "question": "Hình thức kỷ luật nào áp dụng đối với Công chức?",
            "hint": "Gồm 4 hình thức, có Buộc thôi việc, không có Bãi nhiệm.",
            "yB": [
                { "text": "Khiển trách, Cảnh cáo, Cách chức, Bãi nhiệm", "nv": false, "zK": "Bãi nhiệm dành cho Cán bộ." },
                { "text": "Khiển trách, Cảnh cáo, Cách chức, Buộc thôi việc", "nv": true, "zK": "Khoản 1 Điều 36: a) Khiển trách; b) Cảnh cáo; c) Cách chức...; d) Buộc thôi việc." },
                { "text": "Khiển trách, Hạ bậc lương, Giáng chức, Cách chức", "nv": false, "zK": "Luật mới (theo file) tại Điều 36 không liệt kê Hạ bậc lương và Giáng chức là hình thức chính cho công chức nói chung, chỉ nêu 4 loại trên." },
                { "text": "Khiển trách, Cảnh cáo, Sa thải", "nv": false, "zK": "Sa thải là thuật ngữ Bộ luật Lao động." }
            ]
        },
        {
            "question": "Thời hiệu xử lý kỷ luật đối với hành vi vi phạm mức Khiển trách là bao lâu?",
            "hint": "Thời gian ngắn hơn so với các mức khác.",
            "yB": [
                { "text": "02 năm", "nv": false, "zK": "Theo luật cũ." },
                { "text": "05 năm", "nv": true, "zK": "Điểm a Khoản 1 Điều 37: 05 năm đối với hành vi vi phạm đến mức phải kỷ luật bằng hình thức khiển trách." },
                { "text": "10 năm", "nv": false, "zK": "Dành cho các mức khác." },
                { "text": "01 năm", "nv": false, "zK": "Quá ngắn." }
            ]
        },
        {
            "question": "Hành vi vi phạm nào KHÔNG áp dụng thời hiệu xử lý kỷ luật (tức là bị xử lý bất cứ lúc nào)?",
            "hint": "Những vi phạm rất nghiêm trọng hoặc liên quan đến bằng cấp giả.",
            "yB": [
                { "text": "Vi phạm nội quy cơ quan", "nv": false, "zK": "Có thời hiệu." },
                { "text": "Sử dụng văn bằng, chứng chỉ giả; Vi phạm mức Khai trừ Đảng; Xâm hại an ninh quốc gia", "nv": true, "zK": "Khoản 2 Điều 37 liệt kê các trường hợp này." },
                { "text": "Đi làm muộn nhiều lần", "nv": false, "zK": "Có thời hiệu." },
                { "text": "Không hoàn thành nhiệm vụ 1 năm", "nv": false, "zK": "Có thời hiệu." }
            ]
        },
        {
            "question": "Thời hạn xử lý kỷ luật (tính từ khi phát hiện đến khi ra quyết định) tối đa là bao nhiêu ngày (kể cả trường hợp phức tạp)?",
            "hint": "Mức chuẩn là 90, kéo dài thì thêm.",
            "yB": [
                { "text": "90 ngày", "nv": false, "zK": "Đây là mức chuẩn, chưa tính kéo dài." },
                { "text": "150 ngày", "nv": true, "zK": "Khoản 3 Điều 37: ...không quá 90 ngày; trường hợp... phức tạp... thì có thể kéo dài nhưng không quá 150 ngày." },
                { "text": "120 ngày", "nv": false, "zK": "Không đúng số liệu luật." },
                { "text": "60 ngày", "nv": false, "zK": "Quá ngắn." }
            ]
        },
        {
            "question": "Cán bộ, công chức bị Tòa án kết án phạt tù (không hưởng án treo) hoặc tội tham nhũng thì hậu quả là gì?",
            "hint": "Đương nhiên mất chức/việc làm.",
            "yB": [
                { "text": "Bị tạm đình chỉ công tác 1 năm", "nv": false, "zK": "Nhẹ quá." },
                { "text": "Đương nhiên bị bãi nhiệm (với cán bộ) hoặc buộc thôi việc (với công chức)", "nv": true, "zK": "Khoản 2 Điều 35 và Khoản 2 Điều 36: ...đương nhiên bị bãi nhiệm/buộc thôi việc kể từ ngày bản án, quyết định có hiệu lực pháp luật." },
                { "text": "Vẫn được đi làm bình thường", "nv": false, "zK": "Sai luật." },
                { "text": "Chuyển sang làm nhân viên hợp đồng", "nv": false, "zK": "Đã bị buộc thôi việc thì không chuyển." }
            ]
        },
        {
            "question": "Cán bộ, công chức bị kỷ luật cách chức do tham nhũng thì có được bổ nhiệm lại vào vị trí lãnh đạo, quản lý không?",
            "hint": "Chế tài nghiêm khắc với tham nhũng.",
            "yB": [
                { "text": "Được bổ nhiệm lại sau 5 năm", "nv": false, "zK": "Tham nhũng bị cấm chặt chẽ hơn." },
                { "text": "Không được bổ nhiệm vào vị trí lãnh đạo, quản lý", "nv": true, "zK": "Khoản 3 Điều 38: Cán bộ, công chức bị kỷ luật cách chức do tham nhũng thì không được bổ nhiệm vào vị trí lãnh đạo, quản lý." },
                { "text": "Được bổ nhiệm vào vị trí thấp hơn", "nv": false, "zK": "Luật cấm bổ nhiệm vào vị trí lãnh đạo/quản lý nói chung." },
                { "text": "Tùy người đứng đầu quyết định", "nv": false, "zK": "Luật đã cấm cứng." }
            ]
        },
        {
            "question": "Ai có thẩm quyền tạm đình chỉ công tác đối với cán bộ, công chức?",
            "hint": "Người quản lý trực tiếp hoặc cấp có thẩm quyền.",
            "yB": [
                { "text": "Đồng nghiệp cùng phòng", "nv": false, "zK": "Không có quyền." },
                { "text": "Người đứng đầu cơ quan, tổ chức có thẩm quyền", "nv": true, "zK": "Điều 39: Người đứng đầu cơ quan, tổ chức có thẩm quyền có thể quyết định tạm đình chỉ công tác..." },
                { "text": "Công an phường", "nv": false, "zK": "Trừ trường hợp bắt quả tang tội phạm, còn đình chỉ công tác là việc nội bộ cơ quan." },
                { "text": "Tự bản thân công chức", "nv": false, "zK": "Đó là nghỉ phép." }
            ]
        },
        {
            "question": "Luật Cán bộ, công chức mới này có hiệu lực thi hành từ ngày nào?",
            "hint": "Lưu ý đây là văn bản dự thảo hoặc mới được cung cấp trong đề bài.",
            "yB": [
                { "text": "01/01/2024", "nv": false, "zK": "Đã qua." },
                { "text": "01/07/2025", "nv": true, "zK": "Khoản 1 Điều 44: Luật này có hiệu lực thi hành từ ngày 01 tháng 7 năm 2025." },
                { "text": "01/01/2026", "nv": false, "zK": "Đây là hiệu lực của quy định về đánh giá công chức (Khoản 2 Điều 44)." },
                { "text": "01/01/2010", "nv": false, "zK": "Đây là luật cũ năm 2008." }
            ]
        },
        {
            "question": "Quy định về đánh giá công chức (Mục 3 Chương IV) có hiệu lực từ khi nào?",
            "hint": "Trễ hơn hiệu lực chung của Luật.",
            "yB": [
                { "text": "01/07/2025", "nv": false, "zK": "Đây là hiệu lực chung." },
                { "text": "01/01/2026", "nv": true, "zK": "Khoản 2 Điều 44: Quy định về đánh giá công chức... được thực hiện từ ngày 01 tháng 01 năm 2026." },
                { "text": "01/07/2026", "nv": false, "zK": "Sai mốc thời gian." },
                { "text": "Ngay lập tức", "nv": false, "zK": "Sai." }
            ]
        },
        {
            "question": "Cơ quan nào thống nhất quản lý nhà nước về công chức?",
            "hint": "Cơ quan hành chính cao nhất.",
            "yB": [
                { "text": "Bộ Nội vụ", "nv": false, "zK": "Bộ Nội vụ là cơ quan tham mưu, giúp Chính phủ." },
                { "text": "Chính phủ", "nv": true, "zK": "Khoản 2 Điều 41: Chính phủ thống nhất quản lý nhà nước về công chức..." },
                { "text": "Quốc hội", "nv": false, "zK": "Quốc hội ban hành luật." },
                { "text": "Ban Tổ chức Trung ương", "nv": false, "zK": "Quản lý bên Đảng." }
            ]
        },
        {
            "question": "Hồ sơ cán bộ, công chức được quản lý dưới hình thức nào?",
            "hint": "Hiện đại hóa quản lý.",
            "yB": [
                { "text": "Chỉ hồ sơ giấy", "nv": false, "zK": "Lạc hậu." },
                { "text": "Hồ sơ giấy và Hồ sơ điện tử", "nv": true, "zK": "Khoản 1 Điều 42: Hồ sơ cán bộ, công chức bao gồm hồ sơ giấy và hồ sơ điện tử..." },
                { "text": "Chỉ hồ sơ điện tử", "nv": false, "zK": "Vẫn cần hồ sơ giấy để lưu trữ gốc." },
                { "text": "Do cá nhân tự giữ", "nv": false, "zK": "Cơ quan quản lý giữ." }
            ]
        },
        {
            "question": "Một trong những nội dung của 'Vị trí việc làm' là gì?",
            "hint": "Mô tả chi tiết về công việc.",
            "yB": [
                { "text": "Bản mô tả công việc và khung năng lực", "nv": true, "zK": "Điểm c Khoản 2 Điều 23: Bản mô tả công việc và khung năng lực của vị trí việc làm." },
                { "text": "Sơ yếu lý lịch cá nhân", "nv": false, "zK": "Đây là hồ sơ cá nhân." },
                { "text": "Bảng lương cá nhân", "nv": false, "zK": "Không thuộc nội dung vị trí việc làm." },
                { "text": "Quyết định bổ nhiệm", "nv": false, "zK": "Đây là văn bản nhân sự." }
            ]
        },
        {
            "question": "Việc tuyển dụng công chức phải ưu tiên đối tượng nào?",
            "hint": "Chính sách đãi ngộ và đoàn kết dân tộc.",
            "yB": [
                { "text": "Người nhà của lãnh đạo", "nv": false, "zK": "Cấm (vi phạm công bằng)." },
                { "text": "Người có tài năng, người có công với nước, người dân tộc thiểu số", "nv": true, "zK": "Khoản 4 Điều 18: Ưu tiên tuyển dụng người có tài năng, người có công với nước, người dân tộc thiểu số." },
                { "text": "Người có hộ khẩu thành phố", "nv": false, "zK": "Không phân biệt." },
                { "text": "Người nộp hồ sơ sớm nhất", "nv": false, "zK": "Không phải tiêu chí ưu tiên." }
            ]
        },
        {
            "question": "Công chức bị tạm đình chỉ công tác trong trường hợp nào?",
            "hint": "Khi cần ngăn chặn hành vi vi phạm tiếp diễn hoặc phục vụ điều tra.",
            "yB": [
                { "text": "Khi ốm đau", "nv": false, "zK": "Được nghỉ ốm." },
                { "text": "Có dấu hiệu vi phạm trong thi hành nhiệm vụ", "nv": true, "zK": "Điều 39: ...trong trường hợp phát hiện cán bộ, công chức có dấu hiệu vi phạm trong thi hành nhiệm vụ..." },
                { "text": "Khi đi học tập trung", "nv": false, "zK": "Được cử đi học." },
                { "text": "Khi chuẩn bị nghỉ hưu", "nv": false, "zK": "Vẫn làm việc bình thường đến ngày nghỉ." }
            ]
        },
        {
            "question": "Cơ quan nào quy định chi tiết về các hình thức kỷ luật đối với công chức?",
            "hint": "Cơ quan hành pháp ban hành Nghị định hướng dẫn.",
            "yB": [
                { "text": "Bộ Nội vụ", "nv": false, "zK": "Tham mưu thôi." },
                { "text": "Chính phủ", "nv": true, "zK": "Khoản 3 Điều 36: Chính phủ quy định chi tiết Điều này..." },
                { "text": "Tòa án nhân dân tối cao", "nv": false, "zK": "Chỉ xét xử hình sự/hành chính." },
                { "text": "Quốc hội", "nv": false, "zK": "Quy định những vấn đề cơ bản trong Luật." }
            ]
        },
        {
            "question": "Cán bộ, công chức đã nghỉ hưu mới phát hiện có hành vi vi phạm trong thời gian công tác thì xử lý thế nào?",
            "hint": "Không 'hạ cánh an toàn'.",
            "yB": [
                { "text": "Không bị xử lý vì đã nghỉ hưu", "nv": false, "zK": "Quan điểm cũ, nay đã đổi." },
                { "text": "Vẫn bị xử lý kỷ luật (khiển trách, cảnh cáo, xóa tư cách chức vụ)", "nv": true, "zK": "Điểm c Khoản 3 Điều 43: ...phải chịu một trong những hình thức kỷ luật khiển trách, cảnh cáo, xóa tư cách chức vụ đã đảm nhiệm..." },
                { "text": "Chỉ bị phê bình rút kinh nghiệm", "nv": false, "zK": "Quá nhẹ." },
                { "text": "Cắt toàn bộ lương hưu", "nv": false, "zK": "Luật không quy định cắt toàn bộ lương hưu (đây là BHXH), mà xử lý kỷ luật hành chính." }
            ]
        },
        {
            "question": "Thời hạn để cơ quan quản lý thực hiện tinh giản biên chế đối với cán bộ, công chức cấp xã sau sắp xếp là bao nhiêu năm?",
            "hint": "Quy định chuyển tiếp.",
            "yB": [
                { "text": "02 năm", "nv": false, "zK": "Ngắn." },
                { "text": "05 năm", "nv": true, "zK": "Khoản 1 Điều 45: ...thực hiện tinh giản biên chế trong thời hạn 05 năm..." },
                { "text": "10 năm", "nv": false, "zK": "Dài." },
                { "text": "01 năm", "nv": false, "zK": "Quá gấp." }
            ]
        },
        {
            "question": "Chậm nhất đến ngày nào các Bộ, ngành phải hoàn thành việc bố trí vị trí việc làm cho công chức được tuyển dụng trước ngày Luật này có hiệu lực?",
            "hint": "Cho phép thời gian chuyển tiếp khoảng 2 năm sau khi luật có hiệu lực.",
            "yB": [
                { "text": "01/07/2025", "nv": false, "zK": "Ngày hiệu lực." },
                { "text": "01/07/2027", "nv": true, "zK": "Khoản 2 Điều 45: Chậm nhất đến ngày 01 tháng 7 năm 2027..." },
                { "text": "01/01/2030", "nv": false, "zK": "Quá xa." },
                { "text": "Không quy định thời hạn", "nv": false, "zK": "Sai." }
            ]
        },
        {
            "question": "Công chức loại nào KHÔNG nằm trong bảng phân loại ngạch tại Điều 24?",
            "hint": "Luật này phân loại theo Chuyên gia, Chuyên viên...",
            "yB": [
                { "text": "Chuyên gia cao cấp", "nv": false, "zK": "Có trong luật." },
                { "text": "Cán sự", "nv": false, "zK": "Có trong luật." },
                { "text": "Nhân viên", "nv": false, "zK": "Có trong luật." },
                { "text": "Công chức dự bị", "nv": true, "zK": "Luật này không còn đề cập ngạch 'Công chức dự bị' trong danh sách Điều 24 (chỉ nói người tập sự xếp vào ngạch tương ứng tại Điều 45)." }
            ]
        },
        {
            "question": "Cán bộ, công chức làm việc ở vùng đặc biệt khó khăn được hưởng quyền lợi gì thêm?",
            "hint": "Chế độ đãi ngộ.",
            "yB": [
                { "text": "Được nghỉ phép gấp đôi", "nv": false, "zK": "Không quy định chung như vậy." },
                { "text": "Được hưởng phụ cấp và chính sách ưu đãi", "nv": true, "zK": "Khoản 3 Điều 10: ...được hưởng phụ cấp và chính sách ưu đãi theo quy định." },
                { "text": "Được miễn mọi trách nhiệm kỷ luật", "nv": false, "zK": "Sai nguyên tắc bình đẳng." },
                { "text": "Được tự chọn giờ làm việc", "nv": false, "zK": "Phải tuân thủ kỷ luật." }
            ]
        },
        {
            "question": "Việc 'Chỉ định' cán bộ là gì?",
            "hint": "Không qua bầu cử.",
            "yB": [
                { "text": "Giao chức vụ qua thi tuyển", "nv": false, "zK": "Đó là bổ nhiệm/tuyển dụng qua thi." },
                { "text": "Quyết định giao cán bộ giữ chức vụ lãnh đạo, quản lý không qua bầu cử", "nv": true, "zK": "Khoản 6 Điều 5: Chỉ định là việc... giao cán bộ giữ chức vụ... không qua bầu cử." },
                { "text": "Giao chức vụ do dân bầu", "nv": false, "zK": "Đó là bầu cử." },
                { "text": "Ký hợp đồng làm việc", "nv": false, "zK": "Không phải chỉ định." }
            ]
        },
        {
            "question": "Ai có trách nhiệm tạo điều kiện để công chức tham gia đào tạo, bồi dưỡng?",
            "hint": "Cơ quan trực tiếp sử dụng.",
            "yB": [
                { "text": "Gia đình công chức", "nv": false, "zK": "Hỗ trợ cá nhân thôi." },
                { "text": "Cơ quan sử dụng công chức", "nv": true, "zK": "Khoản 2 Điều 28: Cơ quan sử dụng công chức có trách nhiệm tạo điều kiện..." },
                { "text": "Sở Giáo dục và Đào tạo", "nv": false, "zK": "Cơ quan quản lý nhà nước về giáo dục." },
                { "text": "Tự bản thân công chức lo liệu hoàn toàn", "nv": false, "zK": "Cơ quan phải tạo điều kiện." }
            ]
        },
        {
            "question": "Kinh phí đào tạo, bồi dưỡng công chức lấy từ đâu?",
            "hint": "Chủ yếu từ nhà nước.",
            "yB": [
                { "text": "Hoàn toàn do công chức tự chi trả", "nv": false, "zK": "Sai." },
                { "text": "Ngân sách nhà nước cấp và các nguồn kinh phí khác", "nv": true, "zK": "Khoản 3 Điều 28: Kinh phí đào tạo, bồi dưỡng do ngân sách nhà nước cấp..." },
                { "text": "Doanh nghiệp tài trợ 100%", "nv": false, "zK": "Không ổn định." },
                { "text": "Trừ vào lương hàng tháng", "nv": false, "zK": "Sai quy định." }
            ]
        },
        {
            "question": "Công vụ là hoạt động nhằm mục đích gì?",
            "hint": "Phục vụ nhà nước và xã hội.",
            "yB": [
                { "text": "Lợi nhuận cho cơ quan", "nv": false, "zK": "Cơ quan nhà nước không vì lợi nhuận." },
                { "text": "Thực hiện quản lý nhà nước và đáp ứng nhu cầu chung của xã hội", "nv": true, "zK": "Khoản 1 Điều 5: ...nhằm thực hiện quản lý nhà nước và đáp ứng nhu cầu chung của xã hội." },
                { "text": "Phục vụ lợi ích nhóm", "nv": false, "zK": "Bị cấm." },
                { "text": "Giải quyết việc làm cho người nhà", "nv": false, "zK": "Sai." }
            ]
        }
    ]
};
