---
outline: deep
---

# Git コマンド集
::: tip  
Githubをgitでする場合はこちらのコマンドになります。
:::
## 初期設定

```sh
git config --global user.name "XXXX"
git config --global user.email "XXXX@hogehoge.com"
```

## リポジトリの作成とプッシュ

```sh
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/XXXX/XXXXXX.git
git push -u origin master
```

## リモートリポジトリの操作

- **クローン**
    ```sh
    git clone https://github.com/XXXX/XXXXXX.git
    ```
- **変更の取得**
    ```sh
    git pull
    # または
    git fetch
    git merge origin/master
    ```

## ファイルの操作

- **ファイルの登録（コミットするため）**
    ```sh
    git add <ファイル名>
    ```
- **コミット**
    ```sh
    git commit -m "コミットメッセージ"
    ```
- **変更の確認**
    ```sh
    git status
    ```
- **差分の確認**
    ```sh
    git diff <ファイル名>
    ```

## コミット履歴

- **履歴の表示**
    ```sh
    git log
    ```
- **特定コミットの内容表示**
    ```sh
    git show <コミットのハッシュ値>
    ```

## プッシュ

```sh
git push origin <ブランチ名>
```

## 変更の取り消し

- **add の取り消し**
    ```sh
    git reset HEAD <ファイル名>
    ```
- **commit の取り消し**
    ```sh
    git reset --hard HEAD^
    ```
    - `--hard`: コミットとワークディレクトリの内容も書き換え
    - `--soft`: ワークディレクトリはそのままでコミットだけ取り消し
    - `HEAD^`: 直前のコミット
    - `HEAD~{n}`: n個前のコミット

- **commit の打ち消し**
    ```sh
    git revert <コミットのハッシュ値>
    ```
- **コミットメッセージの修正**
    ```sh
    git commit --amend "新しいコミットメッセージ"
    ```
- **push の取り消し**
    ```sh
    git reset --hard <戻したいコミットのハッシュ値>
    git push -f
    ```

## ブランチ操作

- **作成**
    ```sh
    git branch <ブランチ名>
    ```
- **切り替え**
    ```sh
    git checkout <ブランチ名>
    ```
- **作成 & 切り替え**
    ```sh
    git checkout -b <ブランチ名>
    ```
- **名前変更**
    ```sh
    git branch -m <古いブランチ名> <新しいブランチ名>
    ```
- **削除**
    ```sh
    git branch -d <ブランチ名>
    ```
- **リモートへ反映**
    ```sh
    git push -u origin <ローカルのブランチ名>
    ```
- **リモートブランチをローカルへ**
    ```sh
    git branch <ブランチ名> origin/<ブランチ名>
    ```
- **リモートブランチをローカルへ & 切り替え**
    ```sh
    git checkout -b <ブランチ名> origin/<ブランチ名>
    ```
- **全ブランチ確認**
    ```sh
    git branch -a
    ```
- **ブランチ比較**
    ```sh
    git diff <ブランチ名> <ブランチ名>
    ```
- **マージ**
    ```sh
    git merge <ブランチ名>
    ```
- **必ずマージコミットを作る**
    ```sh
    git merge --no-ff <ブランチ名>
    ```
- **リベース**
    ```sh
    git rebase <ブランチ名>
    ```
    > ※ mergeの場合は分岐元、rebaseの場合は分岐先のブランチで実行

## スタッシュ

- **変更点を一旦退避**
    ```sh
    git stash save
    ```
- **一覧表示**
    ```sh
    git stash list
    ```
- **作業を戻す**
    ```sh
    git stash apply <stash名>
    ```
- **作業を消す**
    ```sh
    git stash drop <stash名>
    ```
- **全て消す**
    ```sh
    git stash clear
    ```

## ファイル操作

- **削除**
    ```sh
    git rm -f <ファイル名>
    ```
- **リネーム**
    ```sh
    git mv <元のファイル名> <変えたいファイル名>
    ```
- **最新コミットの状態に戻す**
    ```sh
    git checkout HEAD <ファイル名>
    ```
- **指定コミットまで戻す**
    ```sh
    git checkout <コミットのハッシュ値> <ファイル名>
    ```
- **.gitignore を無視して追加**
    ```sh
    git add -f <ファイル名>
    ```
- **ディレクトリだけ登録（.gitkeepを作成）**
    ```sh
    touch <ディレクトリ名>/.gitkeep
    ```