document.addEventListener('DOMContentLoaded', () => {

    // --- 核心配置区域 ---
    const memeCategories = [
        {
            name: '企鹅',
            path: 'assets/penguins',
            images: [
                "18禁.jpg", "一枪崩死你老妈.webp", "两块五小时.jpg", "严禁嫖娼.jpg", "产品黄色发给我.jpg",
                "仇人全给我乱刀砍死.jpg", "任命你们把片删了.webp", "你也嫖娼？.jpg", "兄弟快走是仙人跳.jpg",
                "全速赶往嫖娼现场.jpg", "准备下海.jpg", "努力搬砖买片中.jpg", "匹配中.webp", "十月雅俗共赏.jpg",
                "十月雅俗共赏中.jpg", "双枪射击你妈的奶头.jpg", "发现原味胖次.webp", "发现组织.webp", "受着.webp",
                "吃我大鸡巴.jpg", "吃我飞天大草.jpg", "品鉴中.jpg", "唯有宝剑能撬动美人逼.jpg", "处男大赛总冠军登场.jpg",
                "好想导管.jpg", "嫖娼被抓获.jpg", "嫖完就跑从你我做起.webp", "嫖完就跑，从你我做起.jpg",
                "寻找嫖娼地中，就差你了.jpg", "导管中.webp", "小心同性恋.webp", "巅峰时期的我.webp", "已匹配到炮友.jpg",
                "已找到片.jpg", "已找到黄色网站.jpg", "我有大鸡巴.webp", "我生来就不是受苦的料.jpg",
                "我真得控制你了.jpg", "我要看基佬.jpg", "我要重新戒撸.webp", "所有人放下手机单手操作.webp",
                "所有人来吃我鸡巴.jpg", "找片中.jpg", "找资源的我belike.jpg", "拍片赚钱中.jpg",
                "探花博主观察中.jpg", "推理产品做爱过程中.jpg", "撸出血了.jpg", "操逼中.jpg", "操逼博士学成归来.jpg",
                "操逼大赛总冠军登场.jpg", "敢拉黑我就问候你的父母.webp", "未能寻到嫖娼地点.webp", "欣赏生殖器.jpg",
                "正在举报黄片网站.jpg", "正在享用新鲜逼水.jpg", "正在传授操逼魔法.jpg", "正在偷学日语.webp",
                "正在创作淫秽物品.jpg", "正在前往约炮地点.jpg", "正在发动鬼脑意淫.jpg", "正在复习日语.jpg",
                "正在学习生物学.jpg", "正在宣传卖淫场所.jpg", "正在寻找卖淫场所.jpg", "正在寻找好友中.webp",
                "正在寻找嫖娼地点.jpg", "正在寻找炮友中.jpg", "正在录制吃鸡巴影片.jpg", "正在打击嫖娼现场.jpg",
                "正在打击约炮场所.jpg", "正在拍摄黄片中.jpg", "正在搜索黄片.jpg", "正在操控你的飞机.jpg",
                "正在收购91.jpg", "正在查询卖淫场所.jpg", "正在查阅成分.jpg", "正在狩猎野生嫩逼.jpg",
                "正在猎杀举报嫖娼者.webp", "正在玩galgame.jpg", "正在研究操逼技巧.jpg", "正在绘制吃鸡巴图片.jpg",
                "正在翻开豹皮.jpg", "正在联系拼机队友.jpg", "正在联系拼机队友.webp", "正在联系约炮小姐.jpg",
                "正在联系肛肠科医生.jpg", "正在肃清卖淫场所.jpg", "正在被口中.jpg", "正在讨要家产黄图.jpg",
                "正在讨要黄片网站.jpg", "正在记录嫖客口供.webp", "正在调查日本女特务.jpg", "正在购买飞机杯.jpg",
                "正在逃离警察追捕.webp", "正在逃离警方视线.jpg", "正在阅读基佬漫画.jpg", "清理秘密污渍中.jpg",
                "现场指导家产做爱中.png", "瓢虫高调路过.webp", "男人再富也要卖.jpg", "男人再穷也别卖身.webp",
                "男人再穷也要嫖.webp", "直女摸屌观看中.webp", "看报中.jpg", "看看腿.jpg", "真男人只干男人.jpg",
                "真男人嫖娼不给钱.jpg", "禁黄.webp", "约炮没给钱.jpg", "航班已结束.webp", "航班结束.jpg",
                "色情消息秒回.jpg", "誓死保卫青楼.webp", "警方已强制介入.webp", "请输入文本.webp", "诺贝尔操逼奖得主登场.webp",
                "谁想吸吸我生殖器.jpg", "谁有兄妹乱伦的本子.jpg", "谁有哥哥草妹妹的本子.jpg", "谁有男娘本子.webp",
                "谁有萌妹扣大叔的本子.jpg", "谁有黄片.jpg", "谁理你.webp", "起飞.webp", "过来.webp", "遥控产品操逼中.jpg",
                "阅读百合漫画.jpg", "青春期对我的影响.jpg", "预备SM中.webp", "高雅人士视察.jpg", "鹿管.webp",
                "黄片网站加载中.jpg"
            ]
        }
    ];
    // --- 配置区域结束 ---


    const categoryList = document.getElementById('category-list');
    const galleryContainer = document.getElementById('gallery-container');
    const currentCategoryTitle = document.getElementById('current-category-title');
    const menuToggle = document.getElementById('menu-toggle');
    const contextMenu = document.getElementById('custom-context-menu');

    function populateSidebar() {
        memeCategories.forEach((category, index) => {
            const imageCount = category.images.length;
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = `${category.name} (${imageCount})`;
            a.dataset.categoryIndex = index;
            if (index === 0) a.classList.add('active');
            li.appendChild(a);
            categoryList.appendChild(li);
        });
    }

    function showCategory(categoryIndex) {
        const category = memeCategories[categoryIndex];
        if (!category) return;

        currentCategoryTitle.textContent = category.name;
        galleryContainer.innerHTML = '';

        category.images.forEach(filename => {
            const imagePath = `${category.path}/${filename}`;
            const item = document.createElement('div');
            item.className = 'gallery-item';

            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';

            const img = document.createElement('img');
            img.className = 'meme-image';
            img.src = imagePath;
            img.alt = filename;
            img.loading = 'lazy';

            const overlay = document.createElement('div');
            overlay.className = 'image-overlay';

            const downloadLink = document.createElement('a');
            downloadLink.href = imagePath;
            downloadLink.setAttribute('download', filename);
            downloadLink.className = 'download-link';
            downloadLink.title = `下载 ${filename}`;
            
            const downloadIcon = document.createElement('img');
            downloadIcon.src = 'assets/download-icon.png';
            downloadIcon.className = 'download-icon';
            downloadIcon.alt = 'Download';

            downloadLink.appendChild(downloadIcon);
            overlay.appendChild(downloadLink);
            
            imageContainer.appendChild(img);
            imageContainer.appendChild(overlay);
            item.appendChild(imageContainer);
            
            const filenameDiv = document.createElement('div');
            filenameDiv.className = 'filename';
            filenameDiv.textContent = filename;
            item.appendChild(filenameDiv);
            
            galleryContainer.appendChild(item);

            // 为每个图片容器添加右键菜单事件
            imageContainer.addEventListener('contextmenu', (e) => {
                // 这里的 e.preventDefault() 是必需的，以防止在图片上依然出现默认菜单
                e.preventDefault();
                showContextMenu(e, imagePath, filename);
            });
        });

        document.querySelectorAll('.category-list a').forEach(a => {
            a.classList.remove('active');
            if (a.dataset.categoryIndex == categoryIndex) {
                a.classList.add('active');
            }
        });

        if (window.innerWidth <= 768) {
            document.body.classList.remove('sidebar-opened');
        }
    }
    
    // 显示和定位右键菜单
    function showContextMenu(event, imagePath, filename) {
        contextMenu.style.display = 'block';
        
        const { clientX: mouseX, clientY: mouseY } = event;
        const { normalizedX, normalizedY } = normalizePosition(mouseX, mouseY);

        contextMenu.style.left = `${normalizedX}px`;
        contextMenu.style.top = `${normalizedY}px`;

        contextMenu.dataset.imagePath = imagePath;
        contextMenu.dataset.filename = filename;
    }

    // 隐藏右键菜单
    function hideContextMenu() {
        if (contextMenu.style.display === 'block') {
            contextMenu.style.display = 'none';
        }
    }

    // 防止菜单超出屏幕
    function normalizePosition(mouseX, mouseY) {
        const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
        const { offsetWidth: menuWidth, offsetHeight: menuHeight } = contextMenu;

        let normalizedX = mouseX;
        let normalizedY = mouseY;

        if (mouseX + menuWidth > windowWidth) {
            normalizedX = windowWidth - menuWidth - 5;
        }
        if (mouseY + menuHeight > windowHeight) {
            normalizedY = windowHeight - menuHeight - 5;
        }
        return { normalizedX, normalizedY };
    }


    // --- 事件监听 ---

    // --- 新增：全局禁用默认右键菜单 ---
    document.addEventListener('contextmenu', e => e.preventDefault());

    categoryList.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            showCategory(e.target.dataset.categoryIndex);
        }
    });

    menuToggle.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.body.classList.toggle('sidebar-opened');
        } else {
            document.body.classList.toggle('sidebar-collapsed');
        }
    });

    // 全局点击事件，用于隐藏菜单
    window.addEventListener('click', hideContextMenu);


    // 为菜单项绑定具体功能
    function setupContextMenuActions() {
        document.getElementById('menu-open-in-tab').addEventListener('click', () => {
            const imagePath = contextMenu.dataset.imagePath;
            if (imagePath) window.open(imagePath, '_blank');
        });

        document.getElementById('menu-copy-link').addEventListener('click', async (e) => {
            const imagePath = contextMenu.dataset.imagePath;
            if (!imagePath) return;
            try {
                const fullUrl = new URL(imagePath, window.location.href).href;
                await navigator.clipboard.writeText(fullUrl);
                const originalText = e.currentTarget.querySelector('span').textContent;
                e.currentTarget.querySelector('span').textContent = '已复制!';
                setTimeout(() => {
                    e.currentTarget.querySelector('span').textContent = originalText;
                }, 1500);
            } catch (err) {
                console.error('复制链接失败: ', err);
                alert('复制链接失败');
            }
        });

        document.getElementById('menu-copy-image').addEventListener('click', async (e) => {
            const imagePath = contextMenu.dataset.imagePath;
            if (!imagePath) return;
            const originalText = e.currentTarget.querySelector('span').textContent;
            try {
                const response = await fetch(imagePath);
                const blob = await response.blob();
                await navigator.clipboard.write([
                    new ClipboardItem({ [blob.type]: blob })
                ]);
                e.currentTarget.querySelector('span').textContent = '已复制!';
            } catch (err) {
                console.error('复制图片失败: ', err);
                e.currentTarget.querySelector('span').textContent = '复制失败';
            } finally {
                setTimeout(() => {
                    e.currentTarget.querySelector('span').textContent = originalText;
                }, 1500);
            }
        });
        
        document.getElementById('menu-download').addEventListener('click', () => {
            const imagePath = contextMenu.dataset.imagePath;
            const filename = contextMenu.dataset.filename;
            if (!imagePath || !filename) return;

            const link = document.createElement('a');
            link.href = imagePath;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }


    // --- 初始化页面 ---
    function init() {
        if (window.innerWidth <= 768) {
            document.body.classList.add('sidebar-collapsed');
        }
        populateSidebar();
        showCategory(0);
        setupContextMenuActions();
    }

    init();
});