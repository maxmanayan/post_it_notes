class NotesController < ApplicationController
  def index
    @notes = Note.all

    render component: "Notes", props: {notes: @notes}
  end

  def show
    @note = Note.find(params[:id])

    render component: "Note", props: {note: @note}
  end

  def new
    render component: "NoteNew"
  end

  def create
    title = params[:note][:title]
    description = params[:note][:description]

    Note.create(title: title, description: description)
    redirect_to notes_path
  end
end
