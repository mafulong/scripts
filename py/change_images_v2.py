import collections


def get_images_from_md_file(md_file):
    md_content = ""
    image_info_list = []
    import re
    with open(md_file, "r+") as f:
        md_content = f.read()
        # print(md_content)
        image_urls = re.findall(r"!\[.*?\]\((.*?)\)", md_content)
        image_info_list += image_urls
        image_urls = re.findall(r"<img src=\".*\"", md_content)
        if image_urls:
            image_urls = [l.removeprefix("<img src=\"") for l in image_urls]
            for i, l in enumerate(image_urls):
                image_urls[i] = l[:l.find("\"")]
        image_info_list += image_urls
    return image_info_list


if __name__ == '__main__':
    import os

    # 找到仓库里图片，然后替换
    pics = []
    pic2path = collections.defaultdict(str)
    for root, dirs, files in sorted(os.walk("/Users/mafulong/github/mdPic/v1")):
        for file in files:
            # 获取.md结尾的文件
            path = root + "/" + file
            pic2path[file] = path
            pics.append(file)
    print(pic2path)
    from change_images import get_md_files
    mdfiles = get_md_files("/Users/mafulong/mafulong.github.io/_posts")
    pic2mdfiles = collections.defaultdict(lambda: [])
    pic2url = collections.defaultdict(str)
    for file in mdfiles:
        images = get_images_from_md_file(file)
        for pic in images:
            if pic.count("@vv1/v1/") == 0:
                continue
            key = pic.split("/")[-1]
            pic2mdfiles[key].append(file)
            pic2url[key] = pic
    i = 1
    # for pic in pics:
    #     if pic2mdfiles[pic] == 0:
    #         print(pic)
    pics = sorted(pics, key=lambda x:(len(x), x))[101:]
    for pic in pics:
        # print(i)
        # print(pic)
        oldpath = pic2path[pic]
        # base = oldpath.split(".")
        newpath = oldpath.replace("v1/%s" % pic, "v3/%s.png" % i)
        print(oldpath, newpath)
        # os.rename(pic2path[pic], pic2path[pic].replace(a, b))
        a = "@vv1/v1/%s" % pic.split(".")[0]
        b = "@vv3/v3/%s.png" % i
        if not pic2url[pic]:
            continue
        newurl = pic2url[pic].replace(a, b)
        # newurl = newurl.replace("@vv1/v1", "@vv3/v3")
        # newurl = newurl.replace("mdPic", "mdPic@vv3")
        print(pic2url[pic], newurl)
        for file in pic2mdfiles[pic]:
            with open(file, "r+") as f:
                md_content = f.read()
            print(pic2url[pic], newurl)
            # md_content = md_content.replace(pic2url[pic], newurl)
            with open(file, "w+") as f:
                f.write(md_content)
        i += 1
