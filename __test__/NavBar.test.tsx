import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { getPage, initTestHelpers } from 'next-page-tester'

initTestHelpers()

describe('navtest', () => {
  it('testing navlink', async () => {
    const { page } = await getPage({
      route: '/index',
    })
    render(page)

    //blog pageへのページ遷移のテスト
    userEvent.click(screen.getByTestId('blog-nav'))
    expect(await screen.findByText('Blog page')).toBeInTheDocument()

    //comment page
    userEvent.click(screen.getByTestId('comment-nav'))
    expect(await screen.findByText('Comment page')).toBeInTheDocument()

    userEvent.click(screen.getByTestId('context-nav'))
    expect(await screen.findByText('Context page')).toBeInTheDocument()

    userEvent.click(screen.getByTestId('task-nav'))
    expect(await screen.findByText('Task page')).toBeInTheDocument()

    userEvent.click(screen.getByTestId('home-nav'))
    expect(await screen.findByText('Wellcome to Nextjs!')).toBeInTheDocument()
  })
})
